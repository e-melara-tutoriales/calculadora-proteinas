import { useMemo, Dispatch, SetStateAction } from "react";

import { OrderItem } from "../types";
import { formatCurrency } from "../helpers";

import TipoPercentageForm from "./TipoPercentageForm";

type OrderTotalProps = {
  orders: OrderItem[];

  propina: number;

  placerOrden: () => void;
  setPropina: Dispatch<SetStateAction<number>>;
};

export default function OrderTotal({
  orders,
  propina,
  setPropina,
  placerOrden,
}: OrderTotalProps) {
  const subTotalAPagar = useMemo(() => {
    return orders.reduce((acc, order) => {
      return acc + order.price * order.quantity;
    }, 0);
  }, [orders]);

  const totalPropina = useMemo(() => {
    return subTotalAPagar * propina;
  }, [propina, orders]);

  const totalPagar = useMemo(
    () => subTotalAPagar + totalPropina,
    [propina, orders]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina: </h2>
        <p>
          SubTotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAPagar)}</span>
        </p>

        <TipoPercentageForm setPropina={setPropina} propina={propina} />

        <p>
          Propina: {""}
          <span className="font-bold">{formatCurrency(totalPropina)}</span>
        </p>
        <p>
          Total a pagar: {""}
          <span className="font-bold">{formatCurrency(totalPagar)}</span>
        </p>
        <button
          disabled={totalPagar === 0}
          onClick={() => placerOrden()}
          className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        >
          Guardar orden
        </button>
      </div>
    </>
  );
}
