import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const Contact=()=>{
return(
    <div className="min-h-full ">
        <h1 className="text-5xl font-bold text-center py-10">Contact</h1>

    <div className="flex py-15">
      <div className="flex flex-col justify-center flex-1 "><h1 className="text-5xl font-bold text-center">Contact me</h1>
      <p className="text-center">Need help? Contact me and I'll get back to you as soon as possible.</p>
 
      </div>
    <div className="flex-1"><Card className="w-160 bg-[#050c1f]">
  <CardHeader>
    <CardDescription>Name:</CardDescription>
    <Input placeholder="Full Name"/>
    <CardDescription>Subject:</CardDescription>
    <Input placeholder="Subject"/>
    <CardDescription>Email:</CardDescription>
    <Input placeholder="example@mail.com"/>
    <CardDescription>Your Message</CardDescription>
      <Textarea placeholder="Type your message here." />
    <Input className="bg-white text-black" type="submit"/>
    
    
    
  </CardHeader>
  
</Card>
</div>
    </div>
        

    </div>
)

}
export default Contact