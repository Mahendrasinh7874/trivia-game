import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Toaster
      invert={true}
      visibleToasts={3}
      position="bottom-right"
      expand={true}
      duration={4000}
      richColors={true}
      // closeButton={true}
    />
    <App />
  </>
);

reportWebVitals();
