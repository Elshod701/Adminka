export interface createProductType {
  id: number;
  image: {
    file: File;
    fileList: FileList;
  };
  title: string;
  price: number;
  is_available: boolean;
  is_new: boolean;
  category: any;
}
