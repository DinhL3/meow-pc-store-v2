export interface CustomBuild {
  id: string;
  name: string;
  tags: string[];
  description: {
    en: string;
    fi: string;
  };
  image: string;
  createdAt: string;
  updatedAt: string;
}
