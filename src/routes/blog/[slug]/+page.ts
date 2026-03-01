export const prerender = true;

import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import type { PostMetadata } from '$lib/utils/posts';

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import (`../../../lib/posts/${params.slug}.md`);

    return {
      content: post.default,
      meta: post.metadata as PostMetadata
    }
  } catch (e) {
    error(404, 'Not Found');
  }
};
