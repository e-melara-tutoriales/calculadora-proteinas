import Header from "./components/Header";
import useOrder from "./hooks/useOrder";
import MenuItems from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";

function App() {
  const { orden, addItem, removeItem } =  useOrder();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>
          <MenuItems addItem={addItem}  />
        </div>
        <OrderContents ordens={orden} removeItem={removeItem} />
      </main>
    </>
  );
}

export default App;
