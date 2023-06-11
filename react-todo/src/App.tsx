import HeaderApp from "./components/HeaderApp";
import { TodoMain } from "./components/todo/";

const App = () => {
  return (
    <div
      className={`bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/bg-mobile-dark.jpg')]`}
    >
      <HeaderApp />

      <TodoMain />

      <section className="text-center mt-8 dark:text-gray-400">
        {/* TODO: drag and drop to reorder list */}
        <p>Drag and drop</p>
      </section>
    </div>
  );
};

export default App;