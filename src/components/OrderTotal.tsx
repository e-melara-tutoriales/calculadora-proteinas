import { useMemo } from "react";
import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

import TipoPercentageForm from "./TipoPercentageForm";

type OrderTotalProps = {
  orders: OrderItem[];
};

export default function OrderTotal({ orders } : OrderTotalProps) {

  const subTotalAPagar = useMemo(() => {
    return orders.reduce((acc, order) => {
      return acc + (order.price * order.quantity);
    }, 0);
  }, [orders]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina: </h2>
        <p>
          SubTotal a pagar: {''}
          <span className="font-bold">{ formatCurrency(subTotalAPagar) }</span>
        </p>
        
        <TipoPercentageForm />

        <p>
          Propina: {''}
          <span className="font-bold">$0.00</span>
        </p>
        <p>
          Total a pagar: {''}
          <span className="font-bold">$0.00</span>
        </p>
      </div>
    </>
  );
}