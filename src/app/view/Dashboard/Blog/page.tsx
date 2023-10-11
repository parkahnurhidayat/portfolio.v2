import Link from "next/link"

const data = async ()=>{
  try {
    const blog = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`,{cache:"no-store"})
    return blog.json()
  } catch (error) {
    
  }
}

const BlogPageView = async () => {
 const blogs = await data()
 
  return (
    <div>
      <div className="border-b pb-8 mb-7">
        <h1 className="text-3xl font-semibold pb-4">Blog</h1>
        <p className="text-slate-500 text-md">"I try to inspire and share knowledge through this blog.</p>
      </div>
      <div>
        <div className="grid gap-10  lg:gap-0 md:grid-cols-2 mx-7  ">
         {blogs?.data.map((blog: any) => (
          <Link href={`/dashboard/blog/${blog.id}`} className="shadow-md rounded-xl lg:max-w-sm  overflow-hidden hover:scale-105 transition-all duration-700">
           <img src={blog.image} alt="blog" className="w-full lg:h-40 object-cover " />
           <div className="px-5 pb-4">
           <h3 className="text-md text-slate-700 pt-3 pb-2 ">{blog.title}</h3>
           <p className="text-slate-500 text-sm pb-2">{blog.date}</p>
           <p className="text-slate-600 text-xs">{blog.body?.desc.substring(0, 120)}</p>
           </div>
          </Link>
         ))}
        </div>
      </div>
  
    </div>
  )
}

export default BlogPageView