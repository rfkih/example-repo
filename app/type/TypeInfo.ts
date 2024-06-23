

export interface CreatePostRequest {
    title: string;
    body: string;
  }
  
  export interface CreatePostResponse {
    id: number;
    title: string;
    body: string;
  }