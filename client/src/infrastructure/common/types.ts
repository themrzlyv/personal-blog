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
}

export interface iPost {
  _id: string;
  title: string;
  content: string;
  tags: iTag[];
  image: string[];
  createdAt: string;
}

export interface iTag {
  _id: string;
  tagName: string;
  posts: iPost[];
  createdAt: string;
}
