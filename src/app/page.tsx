import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { About } from "./about/page"
import Skill  from "./skill/page"
import Project  from "./project/page"
import Contact from "./contact/page"
import Link from "next/link"





const Home=()=>{
return(
  <>
  <div className="flex min-h-full items-center justify-center " >
    <div className="py-19 min-h-full">
    <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              <span className="block mb-2 text-center text-muted-foreground">My Name Is José Nonó</span>
              
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-teal-400 to-sky-500">Network Engineer | Junior Full Stack</span>
            
            </h1>
<p className="text-center">Expert in network infrastructure and modern web development. Connecting the physical world of IT infrastructure with the digital world</p> 
 


    
  <div className="flex justify-center">
    <Button className="bg-sky-500 w-50 h-13 ml-18 mt-11 rounded-3xl "><Link target="_blank" href="https://drive.google.com/file/d/1QOYc9ScZama2B7W2yyOYakNPtMTPDgPQ/view?usp=drive_link">Download CV</Link> </Button>
      <Button variant={"ghost"} className="rounded-3xl w-50 border border-white h-13 hover:bg-black ml-10 mt-11"><Link href="/project">Project</Link> </Button>
  </div>
    </div>
    
  </div>
  <div className="flex min-h-full justify-center gap-10">
<Card className="w-60  text-teal-400 transition-transform duration-300 hover:scale-105 shadow-xl cursor-pointer bg-[#050c1f]">
  <CardHeader>
    <CardTitle className=" text-3xl text-center">1+</CardTitle>
    
  </CardHeader>
  <CardContent>
    <h1 className="text-center text-white">Years of Experience</h1>
  </CardContent>
 
</Card>


<Card className="w-60 text-teal-400 transition-transform duration-300 hover:scale-105 shadow-xl cursor-pointer bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl text-center">10+</CardTitle>
  
  </CardHeader>
  <CardContent className="text-center">
    <h1 className="text-white">Completed Projects</h1>
  </CardContent>
</Card>


<Card className="w-60 text-teal-400 transition-transform duration-300 hover:scale-105 shadow-xl cursor-pointer bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl text-center ">100%</CardTitle>
    
  </CardHeader>
  <CardContent className="text-center">
    <h1 className="text-white">Dedication</h1>
  </CardContent>
  
  
</Card>

  </div>
  <div className="py-20">
  <About/>
  <Skill/>
  <Project/>
  <Contact/>
  </div>
  

</>
)

}
export default Home