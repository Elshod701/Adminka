export interface CategoryType {
  count: number;
  id: number;
  title: string;
  image: string;
  key?: number;
  results?: {
    title: string;
    id?: number;
    image?: string;
  }[];
}
