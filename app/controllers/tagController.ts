import Post from '@app/models/Post';
import Tag from '@app/models/Tag';
import { pagination } from '@app/services/functions';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose'

export default class TagController {
  public static async getAllTags(req: Request, res: Response, next: NextFunction) {
    try {
      const tags = await Tag.find({});
      res.status(200).json(tags);
    } catch (error) {
      next(error);
    }
  }

  public static async getTagById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { page, limit } = req.query;
      const { take, skip } = pagination(page as string, limit as string);
      const tag = await Tag.aggregate([
        {
          $match: {
            _id: mongoose.Types.ObjectId(id),
          },
        },
        {
          $lookup: {
            from: 'posts',
            localField: 'posts',
            foreignField: '_id',
            as: 'posts',
          },
        },
        { $sort: { createdAt: -1 } },
        {
          $skip: skip,
        },
        { $limit: take },
      ]);
      const count = await Post.countDocuments({ tags: mongoose.Types.ObjectId(id) });
      const pages = limit ? Math.ceil(count / take) : 1;
      res.status(200).json({ totalPosts: count, pages, tag: { ...tag[0] } });
    } catch (error) {
      next(error);
    }
  }

  public static async createTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { tagName } = req.body;
      const tag = new Tag({
        tagName,
        posts: [],
      });
      await tag.save();
      res.status(201).json({ message: 'Tag created successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async updateTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { tagName } = req.body;
      await Tag.findByIdAndUpdate(id, { tagName }, { new: true });
      res.status(200).json({ message: 'Tag updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async deleteTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tag = await Tag.findById(id);
      tag.posts.forEach(async (postId: string) => {
        await Post.findByIdAndUpdate(postId, { $pull: { tags: id } });
      });
      await tag.remove();
      res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
