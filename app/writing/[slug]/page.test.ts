import { describe, expect, it } from 'vitest';

import { SITE_URL } from '@/lib/utils';

import { generateMetadata } from './page';

describe('writing post metadata', () => {
  it('uses a trailing-slash canonical URL for posts', async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: 'why-this-study-on-in-game-spending-is-interesting' }),
    });

    expect(metadata.openGraph?.url).toBe(
      `${SITE_URL}/writing/why-this-study-on-in-game-spending-is-interesting/`,
    );
  });
});
