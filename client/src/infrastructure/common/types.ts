export interface iRoute {
  path: string;
  name: string;
  element: React.ComponentType<any>;
  index?: false | undefined;
  routes?: iRoute[];
}

export interface iResponseAllPosts {
  totalPosts: number;
  pages: number;
  posts: iPost[];
  search?: string | undefined;
}

export interface iResponseSinglePost {
  post: iPost;
}

export interface iPost {
  id: string;
  title: string;
  content: string;
  tags: iTag[];
  images: string[];
  createdAt: string;
  updatedAt: string;
}

export interface iTag {
  tag: {
    id: string;
    tagName: string;
    posts: iPost[];
    createdAt: string;
  };
}
