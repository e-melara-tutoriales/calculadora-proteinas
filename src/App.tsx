import Header from "./components/Header";
import MenuItems from "./components/MenuItems";

function App() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-black">Menu</h2>
          <MenuItems  />
        </div>
        <div>
          <h2>Consumo</h2>
        </div>
      </main>
    </>
  );
}

export default App;
