import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";


const BlogDetail = async (id: Number) => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/blog?id=${id}`, {
      cache: "no-store",
    });
    return data.json();
  } catch (error) { 
  }
};

const DetailBlog = async ({ params }: { params: { slug: string } }) => {
  const blogs = await BlogDetail(Number(params.slug));
  

  return (
    <div>
      <div className="border-b pb-5">
        <Link href={"/dashboard/blog"} className="flex items-center group gap-x-2 pb-2 w-16">
        <IconArrowLeft className="cursor-pointer group-hover:animate-bounce"/>
        <div>Back</div>
        </Link>
        <h2 className="text-xl font-semibold py-5">{blogs?.data.title}</h2>
        <p className="text-sm py-2 text-slate-500">Published on {blogs?.data.date}</p>
      </div>
      <div className="py-2">
        <img src={blogs?.data.image} alt="blog" className="w-full py-5" />
        <p className="tracking-wide leading-loose text-sm ">
          {blogs?.data.body.desc}
        </p>
        <p className="tracking-wide leading-loose text-sm pt-10"  >{blogs?.data.body.paraf}</p>
      </div>
      <div className="py-4">
        <img src={blogs?.data.code} className={blogs?.data.id === 2 ? "max-w-xl mx-auto" : ""} alt="blog" />
        <div>
          {blogs?.data.id === 1 ? (
            <div>
              <h1 className="pt-2">HTML Document Structure</h1>
              <ul style={{ listStyleType: "square" }} className="tracking-wide leading-loose text-sm pt-4" >
                <li>
                  &lt;!DOCTYPE html&gt;: The document type declaration for an
                  HTML document.
                </li>
                <li>
                  &lt;html&gt;: The root element that wraps the entire web page.
                </li>
                <li>
                  &lt;head&gt;: Contains information about the document, such as
                  the page title.
                </li>
                <li>
                  &lt;title&gt;: Specifies the title of the page displayed in
                  the browser's tab.
                </li>
                <li>
                  &lt;body&gt;: Contains the content to be displayed in the
                  browser.
                </li>
                <li>
                  &lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, and &lt;a&gt;: Examples of
                  elements used to display text, images, and links.
                </li>
              </ul>
              <div className="tracking-wide leading-loose text-sm pt-7">HTML also allows you to add attributes to these elements to control their appearance and behavior. Furthermore, you can use CSS (Cascading Style Sheets) to fine-tune the look and feel of your web pages.</div>
              <div className="tracking-wide leading-loose text-sm pt-7">This is just a brief overview of HTML. By understanding these basics, you can start creating simple web pages and enhance your ability to manage web content effectively.</div>
              <div className="tracking-wide leading-loose text-sm pt-7">I hope this helps you with your English version of the blog block on understanding the basics of HTML!</div>
            </div>
          ) : (
            <div>
                <h2 className="py-4">In the code above:</h2>
                <ul style={{ listStyleType: "square" }} className="tracking-wide leading-loose text-sm">
                    <li >CSS rules are embedded within a &lt;style&gt; element in the HTML &lt;head&gt;.</li>
                    <li>body, h1, and p are selectors, specifying which elements to style.</li>
                    <li>Properties like color, font-size, and background-color control various aspects of element appearance.</li>
                </ul>
                <p className="tracking-wide leading-loose text-sm pt-7">CSS provides flexibility and control over the design of web pages, making it possible to create visually appealing and user-friendly websites.</p>
                <p className="tracking-wide leading-loose text-sm pt-7" >This is just the beginning of your journey into the world of CSS. As you delve deeper, you'll learn about selectors, specificity, layouts, and responsive design, enabling you to create stunning and functional web pages.</p>
            </div>
          )}
        </div> 
      </div>
    </div>
  );
};

export default DetailBlog;
