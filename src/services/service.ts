import axios from 'axios';
import { Product, ProductsResponse } from '../types/product';

const API_BASE_URL = 'https://dummyjson.com';

export const api = {
  async getProducts(): Promise<ProductsResponse> {
    const { data } = await axios.get<ProductsResponse>(`${API_BASE_URL}/products`);
    return data;
  },

  async getProduct(id: string): Promise<Product> {
    const { data } = await axios.get<Product>(`${API_BASE_URL}/products/${id}`);
    return data;
  }
};