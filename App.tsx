import 'react-native-gesture-handler';
import RootStackNav from "./navigation/RootStackNav";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { store } from "./store";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RootStackNav />
      </Provider>
    </QueryClientProvider>
  );
}
