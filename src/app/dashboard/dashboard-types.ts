
// export means make it available, interface means the next word will become the typescript 'type' then the next word is the typescript type
export interface View {
  age: number;
  region: string;
  date: string;
}

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: View[];
}
