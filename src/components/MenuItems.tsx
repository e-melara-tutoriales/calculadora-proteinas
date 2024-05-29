import { menuItems } from "../data";
import type { MenuItem } from '../types'

type MenuProp = {
  addItem: (item: MenuItem) => void;
}

export default function MenuItems({ addItem }: MenuProp) {
  return (
    <div>
      <ul className="space-y-3 mt-5">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => addItem(item)}
              className="border-2 p-3 hover:bg-teal-400 border-teal-500 w-full flex justify-between">
              <p>{item.name}</p>
              <p className="font-bold">$ {item.price.toFixed(2)}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
