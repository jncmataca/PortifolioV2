import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const About=()=>{
  return(
  < >
  <div className="flex min-h-full bg-[#050c1f] ">
      
        
        
        <div className="flex-1 my-40">
          <div className='flex items-center justify-center relative'>
    <div className='h-100 absolute w-90 rounded-3xl border-16 border-[#EAB308]'></div>
    <div className='h-100 w-90 relative  bg-white rounded-3xl border-16 bottom-5 left-10 border-white'>
      <Image 
            src="/images/486703429_9414543361970785_6317746641127072503_n.jpg"
            alt="Homem feliz"
            fill
            className="object-cover"
          />
    </div>
          </div>
          </div>
      
      
      <div className="flex-2 my-20 ">

        <h1 className="text-5xl ml-40 mt-20 font-bold">About</h1>
        
  <p className="text-lg my-7  text-white mx-40">Hybrid professional with expertise in IT infrastructure and modern web development.
goes by the name of José Nonó Mataca, a passionate technology professional with a unique combination of skills.I bring a well-rounded perspective to IT projects.My experience in network infrastructure allows me to deeply understand how systems communicate, while my development skills enable me to create efficient and scalable web solutions.
I specialize in Cisco, Mikrotik, React, Next.js and Node.js. I love working on projects that connect the physical world of infrastructure with innovative digital solutions.</p>
<Link href="/contact"><Button variant={'destructive'} className='border border-[#EAB308] h-13 mx-40 text-black bg-[#EAB308]'>Contact Me</Button>
</Link></div>



      </div>

</>
      
    
  )
}
