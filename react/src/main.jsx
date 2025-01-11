import { createRoot } from "react-dom/client";
import "./index.css";
// import MyFunction from "./MyFile.jsx";
// import Counter from "./Counter.jsx";
// import App from "./App.jsx"
// import UsingKeys from "./UsingKeys.jsx";
// import Home from "./ecommerce/Home.jsx";
import Todo from "./todolist/Todo.jsx";

createRoot(document.getElementById("root")).render(<Todo />);