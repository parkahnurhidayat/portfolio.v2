import { IconBriefcase, IconCertificate } from "@tabler/icons-react"
import Image from "next/image"
import Link from "next/link"

const HomePageView = ()=>{
    return(
        <section  data-aos="fade-up" className="">
            <div>
            <h1 className="text-3xl font-semibold">Hi ,I'm Parkah</h1>
            <ul className="flex gap-x-4 py-5 text-slate-500">
                <li>FrontEnd Dev</li>
                <li>Student</li>
            </ul>
            <p className="pb-7 border-b">I am an enthusiastic and talented Fresh Graduate with a passion for Frontend development, specializing in the use of the Next.js framework. I possess up-to-date knowledge and skills in the web application development industry and I am ready to make a meaningful contribution to the world of technology.</p>
            </div>
            <div className="pt-4 pb-10  border-b">
                <div className="flex gap-x-2 ">
                    <IconBriefcase className="w-7 h-10" />
                <h1 className="text-xl font-semibold pt-2">Career</h1>
                </div>
                <span className="text-slate-500 pt-2 pb-4 block">My Career Profesional Jurney</span>
                <div className="grid lg:grid-cols-2 gap-6 ">
                    <div className="border max-w-lg flex p-4 rounded-xl">
                        <Image width={100} height={100} src="/asset/RUANGSITE_icon.png" alt="ruangsite" className=" w-16 h-16 my-4" />
                        <div className="pl-4">
                            <h1 className="text-lg">Web Developer</h1>
                            <Link className="text-md text-slate-500 py-2 block " href={"https://ruangsite.com/"} target="_blank"><span className="underline">RuangSite.com</span>
                            <span className="text-md pl-2 text-slate-500 ">• Depok</span></Link>
                            <p className="text-sm text-slate-700 font-semibold">Juni 2022 - Aug 2022</p>
                            <p className="text-sm text-slate-500">~ 2.5 Month </p>
                        </div>
                    </div>
               
                </div>
            </div>
          
            <div>
                <h1 className="text-xl font-semibold py-5">Skills</h1>
                <span className="text-slate-500 pb-4">My coding skills</span>
                <div className="py-4 flex gap-10 flex-wrap">
                    <Image src="/asset/Next.js.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/> 
                    <Image src="/asset/React.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Tailwind CSS.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Laravel.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Bootstrap.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/HTML5.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/CSS3.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Javascript.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/TypeScript.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Vite.js.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Firebase.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/MySQL.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/Node.js.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                    <Image src="/asset/PostgresSQL.png" width={40} height={40} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer"/>
                </div>
            </div>
        </section>
    )
}

export default HomePageView