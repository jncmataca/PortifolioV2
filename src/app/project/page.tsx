import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle,CardDescription } from "@/components/ui/card"
import { Github } from 'lucide-react';
import Image from "next/image"
import Link from "next/link";

const Project=()=>{
    return(
        <div className="flex flex-col items-center py-15 justify-center min-h-screen bg-[#050c1f] ">
            <h1 className="font-bold mb-10 text-5xl">Project</h1>
            <div className="flex justify-center">
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center my-10">
  <div className="mb-10">
<Card className="w-120  h-140 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/tiyane.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>Tiyane Doações</h1></CardTitle>
  <CardDescription className="text-white">This project is a complete donation management system, developed to ensure that donations reach the right recipients securely and transparently. The system was designed during a hackathon using the following tools:</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">React</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Vite</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">TailwindCss</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">shadcn</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Axios</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">NodeJs</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Express</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">MongoDB</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Mongoose</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">JWT</Button>
    <div className="flex w-max justify-end"><Button className="bg-black mr-3 my-1 rounded-xl "><a href="https://github.com/maudlyn01/Tiyane-Doacoes.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a></Button>
    <Button className="my-1 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
    
   

  </CardContent>
</Card>





</div>

<div>
<Card className="w-120  h-140 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/ECOMMERCE.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>E-commerce</h1></CardTitle>
  <CardDescription className="text-white">This repository contains the final project developed by students of the second edition of Bytes 4 Future (B4F). The project consists of an e-commerce system with a React.js frontend and a back.using tools:</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">React</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Vite</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">TailwindCss</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">shadcn</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Axios</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">NodeJs</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Express</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">MongoDB</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Mongoose</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">JWT</Button>
    <div className="flex justify-end"><Button className="bg-black mr-3 my-1 rounded-xl ">
<a href="https://github.com/Jay-Ubisse/b4f-2-final-project.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a>

    </Button>
    <Button className="my-1 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
   

  </CardContent>
</Card>
</div>

<div>
<Card className="w-120  h-140 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/Spotidados.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>Spotidados</h1></CardTitle>
  <CardDescription className="text-white">Spootdados is an app created with the aim of offering an experience similar to Spotify. However, the application design was created with a completely original visual identity, without any similarity to Spotify's current brand.using tools:</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">React</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Vite</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">TailwindCss</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">shadcn</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Axios</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">NodeJs</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Express</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">MongoDB</Button>
    <Button className="border border-[#021958] h-7 w-19 my-2 mr-3 rounded-3xl">Mongoose</Button>
    <Button className="border border-[#021958] h-7 w-15 my-2 mr-3 rounded-3xl">JWT</Button>
    <div className="flex justify-end"><Button className="bg-black mr-3 my-1 rounded-xl "><a href="https://github.com/afonsorelane/spotidados-project-g1.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a>
    </Button>
    <Button className="my-1 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
   

  </CardContent>
</Card>
</div>

<div>
<Card className="w-120  h-130 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/B4FZone.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>B4F-TechZone</h1></CardTitle>
  <CardDescription className="text-white">It is a course platform created with its own identity, originality, and a focus on offering exclusive solutions for those seeking to learn.using tools:</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">React</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Vite</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">TailwindCss</Button>
    <Button className="border border-[#021958] h-7 w-20  mr-3 rounded-3xl">Typescript</Button>
   
    <div className="flex justify-end"><Button className="bg-black mr-3 my-5 rounded-xl ">
      
      <a href="https://github.com/Jay-Ubisse/b4f-techzone-project.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a>
    </Button>
    <Button className="my-5 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
   

  </CardContent>
</Card>
</div>


<div>
<Card className="w-120 h-130 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/Bom dia.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>Clock-Online</h1></CardTitle>
  <CardDescription className="text-white">Online digital clock with real-time display and smart greeting based on the time of day: morning, afternoon or evening. using tools:</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">React</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">Vite</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">TailwindCss</Button>
    <Button className="border border-[#021958] h-7 w-20  mr-3 rounded-3xl">Typescript</Button>
    
  
    <div className="flex justify-end"><Button className="bg-black mr-3 my-5 rounded-xl "><a href="https://github.com/jncmataca/relogio-online-.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a></Button>
    <Button className="my-5 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
   

  </CardContent>
</Card>
</div>




<div>
<Card className="w-120  h-130 text-teal-400    bg-[#050c1f]">
  <CardHeader>
     <img src="/images/plataforma.PNG"  alt=""  className="h-70 rounded-3xl"/>
  </CardHeader>
  
  <CardContent className="text-white relative bottom-7">
    <CardTitle className="text-3xl "><h1>Film-Platform</h1></CardTitle>
  <CardDescription className="text-white">It is a web application for viewing and browsing movies with a focus on usability, clean design and originality in the user experience.</CardDescription>
  
    
    <Button className="border border-[#021958] h-7 w-15 mr-3 rounded-3xl">HTML</Button>
    <Button className="border border-[#021958] h-7 w-15  mr-3 rounded-3xl">CSS</Button>
    <Button className="border border-[#021958] h-7 w-22  mr-3 rounded-3xl">Javascript</Button>
    <div className="flex justify-end"><Button className="bg-black mr-3 my-5 rounded-xl "><a href="https://github.com/Jay-Ubisse/mini-plataforma-filmes-b4f.git" target="_blank" rel="noopener noreferrer"><div className="flex gap-2"><Github  /><h1>Código</h1></div></a></Button>
    <Button className="my-5 bg-sky-500 rounded-xl ">Demo</Button>
    </div>
   

  </CardContent>
</Card>
</div>


          
        </div>

        </div>
        </div>
    )
}
export default Project