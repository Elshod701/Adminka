export interface BannerType {
  count: number;
  next: string;
  previous: string;
  id?: number;
  image?: {
    file: File;
    fileList: FileList;
  };
  title?: any;
  description?: string;
  results?: [
    {
      id: number;
      image: {
        file: File;
        fileList: FileList;
      };
      title: string;
      description: string;
    }
  ];
}
