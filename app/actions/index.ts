import type { Data } from '../types';
import data from '../data.json';

export async function getData() {
  return data as Data;
}
