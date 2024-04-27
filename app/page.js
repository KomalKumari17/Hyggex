import Image from "next/image";
import Header from "./components/Header";
import Content from "./components/Content";

export default function Home() {
  return (
   <div className="bg-white">
   <Header/>
   <Content/>
   </div>
  );
}
