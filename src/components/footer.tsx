import {  Facebook, Github, LinkedinIcon, Mail } from "lucide-react"


export const Footer=()=>{
    return(
        <div >
            <footer className="bg-[#050c1f] flex flex-col items-center ">
                <div className="flex gap-3 mt-10">
                    <Github className="w-6 h-6"/>
                <Facebook className="w-6 h-6" />
                <LinkedinIcon className="w-6 h-6"/>


                </div>
                <div className="mt-3 mb-8">
                <p className="text-sm text-center text-muted-foreground">©{new Date().getFullYear()} José Nonó. All Rights Reserved.</p>
            <p className="text-center">Made with ❤️ by José Nono using Next, Tailwindcss & Framer Motion</p>
            </div></footer>
        </div>
    )
}