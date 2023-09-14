import { Source } from './Source';

export interface IChat {
  question: string;
  answer: string;
  sources: Source[];
  isError: boolean;
}
