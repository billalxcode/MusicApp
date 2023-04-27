import Navbar from "@/components/navbar";
import Api from "../lib/api"

export default function Home() {
  let api = new Api()
  
  api.search('Web Programming Unpas')
  return (
    <>
      <div className="max-w-screen-2xl m-auto relative">
        <Navbar></Navbar>
        <div className="relative flex flex-col">
          
        </div>
      </div>
    </>
  )
}