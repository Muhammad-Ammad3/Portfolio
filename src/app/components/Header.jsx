import Link from "next/link"
import Navbar from "./Navbar"
import { Button } from "@/components/ui/button"


const Header = ()=>{
    return(
    <header className="py-8 xl:py-12 text-white ">
    <div className="container mx-auto flex justify-between items-center">

    {/* logo */}
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Muhammad Ammad<span className="text-accent">.</span>
        </h1>
        </Link>

    {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
        <Navbar />
        <Link href="/contact">
        <Button>Hire Me</Button>
        </Link>
        </div>

    {/* mobile nav */}
    <div className="xl:hidden">
       <MobileNav/>
    </div>
    
    
    </div>
    </header>
    )
}



export default Header