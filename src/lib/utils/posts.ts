export type PostMetadata = {
  title: string;
  description: string;
  date: string;
};

export type Post = PostMetadata & {
  slug: string;
};
