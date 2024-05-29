export type MenuItem = {
  id: number;
  name: string;
  price: number;
}

export type MenuItemId = MenuItem["id"];

export type OrderItem = MenuItem & {
  quantity: number;
}