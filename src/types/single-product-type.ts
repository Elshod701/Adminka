export interface singleProductType {
  results: {
    id: number;
    image: string;
    title: string;
    price: number;
    is_available: boolean;
    category: {
      id: number;
      name: string;
    };
    is_new: boolean;
  }[];
}
