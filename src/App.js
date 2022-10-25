import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Main from "./layout/Main";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router}>
        <Main></Main>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;
