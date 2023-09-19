import NavbarPage from "../header/navbar/page"
import SidebarPageView from "../view/Sidebar/page"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <>
           <NavbarPage/>
        <section className='mx-auto lg:flex'>
          <header className="ml-5 xl:ml-32 2xl:ml-64">
           <SidebarPageView />
          </header>

        <main className=" w-full px-10 xl:pr-8 lg:pl-0 2xl:pr-64 p-4 lg:ml-5 sm:mt-10">
          {children}
        </main>
        </section>
   </>
     
  )
}
