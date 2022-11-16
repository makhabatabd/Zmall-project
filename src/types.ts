interface imageType {
  image: string;
}
export interface ISlider {
  imgArray: imageType[];
  price: number;
}

export interface ItemProps {
  item: ISlider;
}

export interface IOwner {
  id: number;
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
}

export interface IImage {
  id: number;
  image: string;
}

export interface IResult {
  id: number;
  name: string;
  slug: string;
  price: number;
  max_price: number;
  description: string;
  email: string;
  phone_numbers: string[];
  whatsapp_number: string;
  type: string;
  views_count: number;
  phone_view_count: number;
  created_at: string;
  modified_at: string;
  disable_date?: string;
  category: string;
  child_category: string;
  subscribers?: string[];
  is_favorite: boolean;
  owner: IOwner;
  images: IImage[];
  comments: string[];
}

export interface IServerResponse {
  count: number;
  next: string;
  previous?: string;
  results: IResult[];
}

export interface IProps {
  goods: IServerResponse;
}

export interface IValues {
  email?: string;
  password?: string;
}

export interface ISignUp {
  email?: string;
  password?: string;
  password_confirm?: string;
  username?: string;
  lastName?: string;
  phone?: string;
  checked?: string;
}

export interface IHelpItem {
  id: number,
  text: string,
  title: string,
  category: number
}

export interface IHelpDateResults {
  id: number,
  name: string,
  help:IHelpItem[]
}

export interface IHelpData {
  count: number,
  next: string | null,
  previous: string | null,
  results: IHelpDateResults[]
}

export interface IHelpDetail {
  category: number,
  id:number,
  text:string,
  title:string
}