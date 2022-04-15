import Post from '@app/models/Post';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from 'express';
import { pagination } from '@app/services/functions';
import Tag from '@app/models/Tag';

export default class PostController {
  public static async getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
      // Querys for pagination
      const { page, limit, search } = req.query;
      const { take, skip } = pagination(page as string, limit as string);

      const posts = await Post.aggregate([
        { $match: { title: { $regex: search ?? '', $options: 'i' } } },
        // take tags with tagIds
        {
          $lookup: {
            from: 'tags',
            localField: 'tags',
            foreignField: '_id',
            as: 'tags',
          },
        },
        { $sort: { createdAt: -1 } },
        // pagination
        {
          $skip: skip,
        },
        { $limit: take },
      ]);
      const count = await Post.countDocuments();
      const pages = limit ? Math.ceil(count / take) : 1;
      res.status(200).json({ totalPosts: count, pages, posts });
    } catch (error) {
      next(error);
    }
  }

  public static async getPostById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await Post.aggregate([
        {
          $match: {
            _id: mongoose.Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'tags',
            localField: 'tags',
            foreignField: '_id',
            as: 'tags',
          },
        },
      ]);
      res.status(200).json({ post: { ...post[0] } });
    } catch (error) {
      next(error);
    }
  }

  public static async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content, tags } = req.body;
      const post = new Post({
        title,
        content,
        tags,
      });
      tags.forEach(async (tagId: string) => {
        await Tag.findByIdAndUpdate(tagId, { $push: { posts: post._id } });
      });
      await post.save();
      res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, content, tags } = req.body;
      const oldPost = await Post.findById(id);
      oldPost.tags.forEach(async (tagId: string) => {
        await Tag.findByIdAndUpdate(tagId, { $pull: { posts: oldPost._id } });
      });
      await Post.findByIdAndUpdate(id, { title, content, tags }, { new: true });
      tags.forEach(async (tagId: string) => {
        await Tag.findByIdAndUpdate(tagId, { $push: { posts: id } });
      });
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await Post.findByIdAndDelete(id);
      post.tags.forEach(async (tagId: string) => {
        await Tag.findByIdAndUpdate(tagId, { $pull: { posts: post._id } });
      });
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
