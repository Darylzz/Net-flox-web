import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import Router from "./Routes/router"

function App() {
  return (
    <div className="App">
      <Router />
      <ToastContainer position="bottom-center" autoClose={2000} theme="light" />
    </div>
  );
}

export default App;
