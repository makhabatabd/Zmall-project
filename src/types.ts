import { IImages } from "../pages/detail/[id]";

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
  images: IImages[];
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

export interface ISubscriptions {
  count: number;
  next?:null;
  previous?:null;
  results: ISubscription[]
}

export interface ISubscription {
  id: number;
name: string;
price: number;
icon: string;
}