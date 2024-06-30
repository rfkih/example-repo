export interface Categories{
    id: number;
    number: string;
    title: string;
    type: string;
    slug: string;
    image: string;
  }

  
  export interface CategoriesArray {
    items: Categories[];
  }