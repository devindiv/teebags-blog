export interface postList {
  _id: string;
  title: string;
  slug: string;
  content: any;
  shortDescription: string;
  titleImage: any;
  publishedAt: string;
}

export interface singlePost {
  title: string;
  slug: string;
  shortDescription: string;
  titleImage: any;
  content: any;
}
