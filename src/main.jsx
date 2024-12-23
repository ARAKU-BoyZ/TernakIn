import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
// import { Provider } from "react-redux";
// import { reducers } from "./redux/store";
// import { createStore } from "redux";

// const store = createStore(reducers)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    {/* </Provider> */}
  </StrictMode>
);
