

export interface CreatePostRequest {
    title: string;
    body: string;
  }

  export interface CarProps{
    typeID: number;
    Type: string;
    Series: string;
    ImageLink: string;
  }

  
  export interface CreatePostResponse {
    cars: CarProps[];
  }