interface resultType {
  id: number;
  title: string;
  image: string;
}

export interface BrandType {
  key: string;
  id: string;
  title: string;
  image: string;
  count: number;
  results: resultType[];
}
