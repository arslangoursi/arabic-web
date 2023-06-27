import { Head } from "@router";
import { Outlet } from "react-router-dom";
import Logo from "../assets/logo.png";

export default function App() {
  return (
    <>
      <Head
        title="Arabic"
        image={Logo}
        url="https://vitefilerouter.com"
        description="Remixer"
      />
      <Outlet />
    </>
  );
}
