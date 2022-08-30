
export type ItemCategory = {
  name: string,
  img: JSX.Element,
}

export type CategoryProps = {
  category: ItemCategory[],
  className: string,
};

export type ColorItem = {
  color: string,
}

export type ProductItemProps = {
  id: string,
  name: string,
  images: string[],
  normalPrice: number,
  salePrice?: number,
  category: string,
  status?: string,
  discount?: string,
  options?: string[],
  colors?: string[],
  action: string,
  button: string,
}

export type ReviewItemProps = {
  id: string,
  name: string,
  images: string,
  category: string,
  rate: number,
  description: string,
  author: string,
  time: string,
}

export type MainProps = {
    products: ProductItemProps[];
    reviews: ReviewItemProps[];
}