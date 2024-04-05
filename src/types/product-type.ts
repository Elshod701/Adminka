export interface ProductType {
  id?: string;
  title: string;
  image?: {
    file: File;
  };
  parent?: number;
  children?: {
    id: string;
    image: string;
    title: string;
  }[];
  data?: {
    id: string;
    image: string;
    title: string;
    parent: number;
  };
}
