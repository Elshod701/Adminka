export interface CategoryType {
  results: {
    id: Number;
    title: string;
    image: string;
    key?: number;
    results?: {
      title: string;
      id?: number;
      image?: string;
    }[];
  };
}
