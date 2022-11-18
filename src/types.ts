import { IImages } from '../pages/detail/[id]';

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
  next?: null;
  previous?: null;
  results: ISubscription[];
}

export interface ISubscription {
  id: number;
  name: string;
  price: number;
  icon: string;
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
  id: number;
  text: string;
  title: string;
  category: number;
}

export interface IHelpDateResults {
  id: number;
  name: string;
  help: IHelpItem[];
}

export interface IHelpData {
  count: number;
  next: string | null;
  previous: string | null;
  results: IHelpDateResults[];
}

export interface IHelpDetail {
  category: number;
  id: number;
  text: string;
  title: string;
}

export interface IAuth {
  token?: '';
  access?: '';
}

export interface IData {
  chat: IChat;
  messages_parts: IMessage;
}

interface IChat {
  sender_name: string;
  advertisement_name: string;
  advertisement_price: number;
  advertisement?: number;
}

interface IMessage {
  date: IElem[];
}

export interface IElem {
  sender?: string;
  sender_name?: string;
  chat?: string;
  message?: string;
  send_date?: string;
}

export interface IEachMessage {
  ads_id: number | undefined,
  chat_id: string | string[] | undefined,
  message: string
}
