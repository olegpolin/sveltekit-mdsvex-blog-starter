export const prerender = true;

import type { PageServerLoad } from './$types';
import type { PostMetadata, Post } from '$lib/utils/posts';

export const load: PageServerLoad = async () => {
  const modules = import.meta.glob('/src/lib/posts/*.md', { eager: true });

  let posts: Post[] = [];

  for (const path in modules) {
    const module = modules[path] as { metadata: PostMetadata };
    const postMetadata = module.metadata;
    posts.push({
      ...postMetadata,
      slug: path.split('/').pop()?.replace('.md', '') || '',
    });
  }

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
};
