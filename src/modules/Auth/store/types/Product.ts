export interface ProductData {
  color: string;
  capacity: string;
}

export interface Product {
  id: string;
  name: string;
  data: ProductData;
}

export interface ProductState {
  list: Product[];
  loading: boolean;
  error: string | null;
}
