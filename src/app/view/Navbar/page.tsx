'use client'
import { IconArticle, IconBrandGithub, IconBrandGithubCopilot, IconBrandInstagram, IconBrandLinkedin, IconHome, IconInfoCircle, IconSubtask, IconTableShare } from "@tabler/icons-react"
import { usePathname } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

const NavbarPageView = () => {


  const pathname = usePathname()

  const linkStyle ="flex scale-95 items-center px-4 py-1 group rounded-xl hover:bg-slate-100  hover:shadow-md link  transition-all duration-500"
   const linkStyleActive = linkStyle + " active-mobile "
  
 
  const clikHamburger = () => {
    const menuNavbar =  document.getElementById("navbar-hamburger")
    menuNavbar?.classList.toggle("hidden")
   
    
 }
  return (
   
<nav data-aos="fade-down-right" className="border-b backdrop-blur-md bg-transparent lg:hidden"> 
  <div className="max-w-screen-xl flex flex-wrap items-center  justify-between mx-auto p-3 lg:block lg:h-full lg:px-2 lg:pt-20 lg:w-full ">
    <a href="#" className="flex items-center px-4 ">
    <Image className="w-14 h-14 mb-2 mr-2 rounded-full border shadow-lg bg-top object-cover  " src='/profile/profile2.png' alt="Profile" width={100} height={100} />
    <div>
    <h1 className="text-lg font-medium">Parkah Nurhidayat</h1>
    <p className="text-xs text-slate-500">Front End Dev 👋</p>
    </div>
    </a>
    <button data-collapse-toggle="navbar-hamburger" type="button" onClick={()=>clikHamburger()} className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400  dark:focus:ring-gray-600 lg:hidden" aria-controls="navbar-hamburger" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
    </button>
    <div className="hidden w-full h-screen p-4 lg:block"  id="navbar-hamburger">
    <ul className="space-y-1 font-medium  border-y py-4" onClick={()=>clikHamburger()} id="ul-navbar">
                <li >
                    <Link className={pathname == "/dashboard/home" ? linkStyleActive : linkStyle} href={"/dashboard/home"}><IconHome className="w-6 h-8 mr-2 text-gray-500 group-hover:text-slate-900  " />Home</Link>
                </li>
                <li >
                    <Link className={pathname == "/dashboard/project" ? linkStyleActive : linkStyle}  href={"/dashboard/project"}><IconSubtask className="w-6 h-8 mr-2 text-gray-500 group-hover:text-slate-900  " />Project</Link>
                </li>
                <li >
                    <Link className={pathname == "/dashboard/blog" ? linkStyleActive : linkStyle}  href={"/dashboard/blog"}><IconArticle className="w-6 h-8 mr-2 text-gray-500 group-hover:text-slate-900  " />Blog</Link>
                </li>
                <li >
                    <Link className={pathname == "/dashboard/roadmap" ? linkStyleActive : linkStyle}  href={"/dashboard/roadmap"}><IconTableShare className="w-6 h-8 mr-2 text-gray-500 group-hover:text-slate-900  " />Roadmap</Link>
                </li>
                <li >
                    <Link className={pathname == "/dashboard/about" ? linkStyleActive : linkStyle}  href={"/dashboard/about"}><IconInfoCircle className="w-6 h-8 mr-2 text-gray-500 group-hover:text-slate-900  " />About</Link>
                </li>

            </ul>
            <footer className="py-4">
                <h5 className="pl-5">Lest's Connect</h5>
            <div className="flex gap-x-5 py-4 border-b px-7  ">
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
            <span className="block py-3 pl-5 text-slate-500">© 2023 by❤️ Parkah Nurhidayat</span>
            </footer>
    </div>
  </div>
</nav>
 


   
  )
}

export default NavbarPageView