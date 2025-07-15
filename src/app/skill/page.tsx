import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Server,ChevronsLeftRight,Database,Settings,Network,Monitor,Disc } from 'lucide-react';




const Skill=()=>{
    return(
        <div className="min-h-full py-16">
            
              
             <div className="flex flex-col items-center">   <h1 className="text-5xl font-bold text-center">SKILL</h1></div>
                
<div className="flex justify-center">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center my-20">
  <div className="mb-10">
<Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><ChevronsLeftRight className="h-11 w-11"/><h1>Frontend</h1></CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 w-20 border-teal-400 mr-3 rounded-3xl">HTML5</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">CSS3</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">JavaScript(ES6+)</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">React</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Framer Motion</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Next</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Tailwind Css</Button>
     
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Shadcn</Button>
   

  </CardContent>
</Card>
</div>

<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Server className="h-10 w-10"/><h1>Backend</h1></CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">NodeJs</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Express</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">TypeScript</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Rest APIs</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">GraphQL</Button>
   

  </CardContent>
</Card>

</div>

<div>
  <Card className="w-80  h-80 text-teal-400 bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Database className="h-10 w-10"/>Banco de Dados</CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">MongoDB</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">PostgreSQL</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">MySQL</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Firebase</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Supabase</Button>
   

  </CardContent>
</Card>

</div>


<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Settings className="h-11 w-11"/>DevOps</CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Git & GitHub</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Docker</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Vite</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Webpack</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Jest</Button>
   

  </CardContent>
</Card>

</div>


<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Network className="h-10 w-10"/><h1>Network</h1></CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Cisco IOS</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Mikrotik RouterOs</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">TCP/IP</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">VLAN & Switching</Button>
    <Button className="border bg-teal-800  border-teal-400 mr-3 rounded-3xl">Routing Protocols</Button>
   

  </CardContent>
</Card>

</div>

<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Server className="h-10 w-10"/>Server</CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Windows Server (AD,DNS,DHCP)</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Servidores Web(IIS,Apache,Nginx)</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">File Server & Print Server</Button>
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Hyper-V/VMware</Button>
    
   

  </CardContent>
</Card>

</div>


<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Disc className="h-10 w-10"/><h1>Systems</h1></CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Linux(Debian,CentOS,Ubuntu)</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">Windows(Desktop & Server)</Button>
    
   

  </CardContent>
</Card>

</div>


<div>
  <Card className="w-80  h-80 text-teal-400    bg-[#050c1f]">
  <CardHeader>
    <CardTitle className="text-3xl flex gap-2 text-center"><Monitor className="h-10 w-10"/><h1>Monitoring</h1></CardTitle>
  
  </CardHeader>
  <CardContent className="text-white">
    <Button className="border my-1 bg-teal-800 border-teal-400 mr-3 rounded-3xl">Zabbix/Nagios</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">SNMP</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">WireShark(Análise)</Button>
    <Button className="border my-1 bg-teal-800  border-teal-400 mr-3 rounded-3xl">NetFlow</Button>
    
   

  </CardContent>
</Card>

</div>


          
        </div>
        </div>
        </div>
    )
}
export default Skill