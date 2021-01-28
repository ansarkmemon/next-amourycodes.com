import { NextApiRequest, NextApiResponse } from 'next';
import config from '../../config';
import { getPage, getTable } from '@utils/api';

export default async function home(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const homepage = await getHomePage();
  res.json({ ...homepage });
}

export const getHomePage = async (): Promise<any> => {
  const { introId, guidesTable } = config;
  const introBlocks = await getPage(introId);
  const guidesTableBlocks = await getTable(guidesTable);
  return { intro: introBlocks, guides: guidesTableBlocks }
}