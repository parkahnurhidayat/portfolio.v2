import Image from "next/image"
import Link from "next/link"

const ProjectPageView = () => {
  return (
    <div data-aos="fade-up">
      <div className="border-b pb-10">
        <h1 className="text-3xl font-semibold py-4">Project</h1>
        <p className="text-slate-500 font-medium uppercase ">featuring all of my projects about technology</p>
      </div>
      <div className="flex flex-wrap gap-6 border-t py-10">
        <div className="border cursor-pointer rounded-xl shadow-md lg:max-w-sm  hover:scale-105 transition-all duration-700 overflow-hidden group:">
          <Link href={"https://parkah-portfolio.vercel.app/"} target="_blank">

            <Image src="/project/project1.png" className="w-full h-48 object-cover" alt="project1" width={1000} height={1000}  />
            <div className="p-5">
              <h2 className="text-md text-slate-800 uppercase pt-5 pb-2">Portfolio V.1</h2>
              <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, atque.</p>
              <div className="flex gap-x-4 pt-5">
                <Image src="/asset/Tailwind CSS.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/Javascript.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/Vite.js.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/React.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
              </div>
            </div>
           

          </Link>
        </div>
        <div className="border cursor-pointer rounded-xl shadow-md lg:max-w-sm  hover:scale-105 transition-all duration-700 overflow-hidden">
          <Link href={"https://next-13-deploy.vercel.app/products"} target="_blank">

            <Image src="/project/crud.png" className="w-full h-48 object-cover" alt="project1" width={1000} height={1000} />
            <div className="p-5">
              <h2 className="text-md text-slate-800 uppercase pt-5 pb-2">CRUD Next.js 13 (prisma + postgresql)</h2>
              <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, atque.</p>
              <div className="flex gap-x-4 pt-5">
                <Image src="/asset/Tailwind CSS.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/TypeScript.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/Next.js.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
                <Image src="/asset/PostgresSQL.png" width={25} height={25} alt="tech" className="hover:scale-125 transition-all duration-500 cursor-pointer" />
              </div>
            </div>
          </Link>
        </div>


      </div>
    </div>
  )
}

export default ProjectPageView