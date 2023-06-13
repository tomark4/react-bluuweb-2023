import HeaderApp from "./components/HeaderApp";
import { TodoMain } from "./components/todo/";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
//dark:bg-[url('./assets/bg-mobile-dark.jpg')  md:dark:bg-[url('./assets/bg-desktop-dark.jpg')]
//bg-[url('./assets/bg-mobile-light.jpg')] md:bg-[url('./assets/bg-desktop-light.jpg')]
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div
        className={`bg-[url('./assets/bg-mobile-light.jpg')] md:bg-[url('./assets/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/bg-desktop-dark.jpg')] dark:bg-[url('./assets/bg-mobile-dark.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen dark:bg-gray-900 transition-all duration-1000`}
      >
        <HeaderApp />
        <TodoMain />
      </div>
    </QueryClientProvider>
  );
};

export default App;
