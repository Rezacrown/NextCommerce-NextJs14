export type simplifiedProduct = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  imageUrl: string;
  categoryName: string;
};

export interface fullProduct {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
  price_id: string;
}
