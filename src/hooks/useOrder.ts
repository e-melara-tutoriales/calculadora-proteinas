import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [orden, setOrden] = useState<OrderItem[]>([]);

  const addItem = (item: MenuItem) => {
    const id = orden.findIndex((orderItem) => orderItem.id === item.id);
    if (id !== -1) {
      const newOrden = [...orden];
      newOrden[id].quantity += 1;
      setOrden(newOrden);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrden([...orden, newItem]);
    }
  };

  return {
    // state
    orden,
    
    // functions
    addItem,
  };
}
