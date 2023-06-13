import HeaderApp from "./components/HeaderApp";
import { TodoMain } from "./components/todo/";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`bg-[url('./assets/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/bg-mobile-dark.jpg')] md:bg-[url('./assets/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/bg-desktop-dark.jpg') transition-all duration-1000`}
      >
        <HeaderApp />

        <TodoMain />

        <section className="text-center mt-8 dark:text-gray-400">
          {/* TODO: drag and drop to reorder list */}
          <p>Drag and drop</p>
        </section>
      </div>
    </QueryClientProvider>
  );
};

export default App;
