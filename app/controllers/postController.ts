import { prisma } from '@app/config/prismaConfig';
import { pagination } from '@app/services/functions';
import { NextFunction, Request, Response } from 'express';

export default class PostController {
  public static async getAllPosts(req: Request, res: Response, next: NextFunction) {
    try {
      // Querys for pagination
      const { page, limit, search } = req.query;
      const { take, skip } = pagination(page as string, limit as string);

      const posts = await prisma.post.findMany({
        orderBy: {
          createdAt: 'desc',
        },
        where: !search ? undefined : {
          OR: [
            { title: { search: search as string, mode: 'insensitive'}},
            { content: { search: search as string, mode: 'insensitive'}}
          ]
        },
        include: {
          tags: {
            select: {
              tag: true,
            },
          },
        },
        take: take ?? undefined,
        skip: skip ?? undefined,
      });
      const count = await prisma.post.count();
      const pages = limit ? Math.ceil(count / take) : 1;
      res.status(200).json({ totalPosts: count, pages, posts, search });
    } catch (error) {
      next(error);
    }
  }

  public static async getPostById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await prisma.post.findUnique({
        where: { id: parseInt(id) },
        include: {
          tags: { select: { tag: true } },
        },
      });
      res.status(200).json({ post });
    } catch (error) {
      next(error);
    }
  }

  public static async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { title, content, tags } = req.body;
      await prisma.post.create({
        data: {
          title,
          content,
          tags: {
            create: tags?.map((id: number) => ({ tagId: id })),
          },
        },
      });
      res.status(201).json({ message: 'Post created successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { title, content, tags } = req.body;
      await prisma.post.update({
        where: { id: Number(id) },
        data: {
          title,
          content,
          tags: {
            update: tags?.map((id: number) => ({ tagId: id })),
          }
        },
      });
      res.status(200).json({ message: 'Post updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      await prisma.post.delete({
        where: { id: Number(id) },
      });
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
