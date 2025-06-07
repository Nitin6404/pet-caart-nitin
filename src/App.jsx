import Router from "./router";
import { ToastContainer } from "react-toastify";
export default function App(){
  return(
    <>
      <Router />
      <ToastContainer position="top-right" />
    </>
  )
}