import { NextApiHandler } from 'next';
import { makeFakeQuery as fakeQuery } from './../../utils/constants';

const secretHandler: NextApiHandler = async (_req, res) => {
  return res.status(200).send(fakeQuery());
};

export default secretHandler;
