import ApiError from '@app/middlewares/ApiError';
import { pagination } from '@app/services/functions';
import { NextFunction, Request, Response } from 'express';
import { prisma } from '../config/prismaConfig';
export default class TagController {
  public static async getAllTags(req: Request, res: Response, next: NextFunction) {
    try {
      // const tags = await Tag.find({});
      const tags = await prisma.tag.findMany({
        orderBy: {
          tagName: 'asc',
        },
      });
      res.status(200).json({ totalTags: tags.length, tags });
    } catch (error) {
      next(error);
    }
  }

  public static async getTagById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { page, limit } = req.query;
      const { take, skip } = pagination(page as string, limit as string);
      const tag = await prisma.tag.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          posts: {
            include: {
              post: true,
              tag: true,
            },
            skip: skip ?? undefined,
            take: take ?? undefined,
          },
        },
      });
      const totalPosts = await prisma.tag.findUnique({
        where: {
          id: Number(id),
        },
        include: {
          posts: {
            include: {
              post: true,
            },
          },
        },
      });
      const count = totalPosts?.posts.length as number;
      const pages = limit ? Math.ceil(count / take) : 1;
      res.status(200).json({ totalPosts: count, pages, tag });
    } catch (error) {
      next(error);
    }
  }

  public static async createTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { tagName } = req.body;
      const existTag = await prisma.tag.findUnique({ where: { tagName } });
      if (existTag) return next(ApiError.badRequest(400, 'This tag already exists!'));
      await prisma.tag.create({
        data: {
          tagName,
        }
      })
      res.status(201).json({ message: 'Tag created successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async updateTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { tagName } = req.body;
      if (!tagName) return next(ApiError.badRequest(400, 'Please fill all inputs!'));
      const existNamedBrand = await prisma.tag.findUnique({ where: { id: Number(id) } });
      if (!existNamedBrand) return next(ApiError.badRequest(400, "Tag couldn't find!"));
      if (tagName === existNamedBrand?.tagName)
        return next(ApiError.badRequest(400, 'The name same as older!'));
      await prisma.tag.update({
        where: { id: Number(id) },
        data: {
          tagName,
        },
      });
      res.status(200).json({ message: 'Tag updated successfully' });
    } catch (error) {
      next(error);
    }
  }

  public static async deleteTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
       await prisma.tag.delete({
         where: { id: Number(id) },
       });
      res.status(200).json({ message: 'Tag deleted successfully' });
    } catch (error) {
      next(error);
    }
  }
}
