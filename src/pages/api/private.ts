import { NextApiHandler } from 'next';
import { getSession } from 'next-auth/client';
import db from '../../utils/db';

const secretHandler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });
  if (session) {
    const posts = await db.post.findMany({ where: { author: { email: session.user?.email } } });
    return res.send(posts);
  } else {
    return res.status(403).send('You are not permitted to access this route');
  }
};

export default secretHandler;
