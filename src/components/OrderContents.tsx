import type { OrderItem, MenuItemId } from "../types";
import { formatCurrency, formatTotal } from "../helpers";

import OrderTotal from "./OrderTotal";

type OrderContentsProps = {
  ordens: OrderItem[];
  removeItem: (id: MenuItemId) => void;
};

export function OrderContents({ ordens, removeItem }: OrderContentsProps) {
  return (
    <div className="px-10 mx-2">
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-5">
        {ordens.length === 0 ? (
          <p className="text-center">La orden esta vacia</p>
        ) : (
          ordens.map((orden) => (
            <div key={orden.id} className="flex justify-between items-center p-3 border-t">
              <div>
                <p className="text-lg">
                  {orden.name} - {formatCurrency(orden.price)}
                </p>
                <p className="font-black">
                  Cantidad: {orden.quantity} -{" "}
                  {formatTotal(orden.price, orden.quantity)}
                </p>
              </div>
              <button 
                onClick={() => removeItem(orden.id)}
                className="bg-red-600 h-8 w-8 rounded-full text-white">x</button>
            </div>
          ))
        )}
        <OrderTotal orders={ordens} />
      </div>
    </div>
  );
}
