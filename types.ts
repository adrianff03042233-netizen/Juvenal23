
export enum OrderStatus {
  OPEN = 'Aberto',
  IN_SERVICE = 'Em atendimento',
  COMPLETED = 'Concluído'
}

// User interface for authentication data, required by AuthModal.tsx
export interface User {
  id: string;
  username: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  categoryId: string;
  subCategoryId: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  themeColor: string;
}

export interface SubCategory {
  id: string;
  parentId: string;
  name: string;
  icon: string;
  description: string;
}

export interface Ticket {
  id: string;
  productId: string;
  productName: string;
  purchaseDate: string;
  status: OrderStatus;
}