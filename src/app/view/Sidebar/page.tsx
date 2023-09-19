'use client'
import { IconArticle, IconBrandGithub,  IconBrandInstagram, IconBrandLinkedin, IconHome, IconInfoCircle, IconSubtask, IconTableShare } from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
const SidebarPageView =()=>{
    const patchname = usePathname()
    const linkStyle ="flex scale-95 items-center px-4 py-1 group rounded-xl hover:bg-slate-100  hover:shadow-md link hover:scale-105 transition-all duration-500"
    const linkStyleActive = linkStyle + " active "
    return(   
        <aside data-aos="fade-down" className="container sticky lg:block hidden overflow-hidden left-10 top-0 z-40 w-72 h-screen transition-transform -x-translate-x-full">
        <div className="h-full px-2 pt-20 overflow-y-auto ">
            <div className="flex flex-col pb-10 px-4 ">
              <Image className="w-28 h-28 mb-3 rounded-full shadow-lg bg-top object-cover " src='/profile/profile2.png' alt="Profile" width={100} height={100} />
              <h5 className="mb-1 text-xl text-slate-900 font font-medium">Parkah Nurhidayat</h5>
              <span className="text-sm text-slate-500">Front End Dev 👋</span>
            </div>
            <ul className="space-y-1 font-medium  border-y py-4" id="ul-nav" >
                <li >
                    <Link className={patchname == "/dashboard/home" ? linkStyleActive : linkStyle} href={"/dashboard/home"}><IconHome className="w-6 h-8 mr-2  group-hover:text-slate-900  " />Home</Link>
                </li>
                <li >
                    <Link className={patchname == "/dashboard/project" ? linkStyleActive : linkStyle}  href={"/dashboard/project"}><IconSubtask className="w-6 h-8 mr-2  group-hover:text-slate-900  " />Project</Link>
                </li>
                <li >
                    <Link className={patchname == "/dashboard/blog" ? linkStyleActive : linkStyle} href={"/dashboard/blog"}><IconArticle className="w-6 h-8 mr-2  group-hover:text-slate-900  " />Blog</Link>
                </li>
                <li >
                    <Link className={patchname == "/dashboard/roadmap" ? linkStyleActive : linkStyle}  href={"/dashboard/roadmap"}><IconTableShare className="w-6 h-8 mr-2  group-hover:text-slate-900  " />Roadmap</Link>
                </li>
                <li >
                    <Link className={patchname == "/dashboard/about" ? linkStyleActive : linkStyle}  href={"/dashboard/about"}><IconInfoCircle className="w-6 h-8 mr-2  group-hover:text-slate-900  " />About</Link>
                </li>
            </ul>
            <footer className="py-4">
                <h5 >Lest's Connect</h5>
            <div className="flex gap-x-5 py-4 border-b  ">
                <Link href={"https://instagram.com/parkhnh_?igshid=ZGUzMzM3NWJiOQ=="} target="_blank">
                    <IconBrandInstagram className="h-8 w-8  "/>
                </Link>
                <Link href={"https://github.com/parkahnurhidayat"} target="_blank">
                    <IconBrandGithub className="h-8 "/>
                </Link>
                <Link href={"https://www.linkedin.com/in/parkah-nurhidayat-6565a627b"} target="_blank">
                    <IconBrandLinkedin className="h-8 w-8  "/>
                </Link>
            </div>
            <span className="block py-3 text-slate-500">© 2023 by❤️ Parkah Nurhidayat</span>
            </footer>
        </div>
    </aside>
 
    )
}

export default SidebarPageView