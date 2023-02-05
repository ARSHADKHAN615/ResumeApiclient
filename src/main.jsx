import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { persistor, store } from "./redux-store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import TagManager from 'react-gtm-module'
 
// const tagManagerArgs = {
//     gtmId: 'GTM-558QHFW'
// }
// TagManager.initialize(tagManagerArgs)

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,  
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </PersistGate>
  </Provider>
);
