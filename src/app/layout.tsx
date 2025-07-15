import { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

type Props={
  children:ReactNode

}
const Layout=({children}:Props)=>{
  return(
    <html className="min-h-screen flex flex-col bg-[#030712] text-gray-100 ">
      <body>
      
      <Header/>
        
<hr />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
export default Layout