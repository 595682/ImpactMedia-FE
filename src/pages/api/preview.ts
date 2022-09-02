import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.query.secret !== (process.env.PREVIEW_SECRET || 'secret-token')) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({});

  if (req.query.type === 'portfolio') {
    return res.redirect(`/portfolio/${req.query.slug}`);
  }
  if (req.query.type === 'blog') {
    return res.redirect(`/blog/${req.query.slug}`);
  }

  return res.status(401).json({ message: 'Missing slug!' });
}
