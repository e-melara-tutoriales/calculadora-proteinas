import Header from "./components/Header";
import MenuItems from "./components/MenuItems";
import { OrderContents } from "./components/OrderContents";
import useOrder from "./hooks/useOrder";

function App() {
  const { orden ,addItem } =  useOrder();

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>
          <MenuItems addItem={addItem}  />
        </div>
        <OrderContents ordens={orden} />
      </main>
    </>
  );
}

export default App;
