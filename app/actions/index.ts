import type { Data } from '../types';
import data from '../data.json';

export async function getData(): Promise<Data> {
  return data as Data;
}
