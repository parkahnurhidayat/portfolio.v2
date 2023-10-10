
import { NextRequest, NextResponse } from "next/server";

const data =[
    {
        id: 1,
        title: 'Understanding HTML Basics: Web Page Structure',
        body:{
               desc:'HTML (HyperText Markup Language) is the foundation of web development. It serves as the backbone for creating structured and organized web pages. HTML allows you to arrange and display content, such as text, images, videos, and links, in a way that web browsers can understand.',
               paraf:'An HTML document consists of elements enclosed within tags. These tags instruct the browser on how to display the content. Here s an example of the fundamental HTML elements you ll find in almost every web page:'    
        },
        code: '/blog/codehtml.png',
        image: '/blog/html.webp',
        date: '10 October 2023'
    },
    {
        id: 2,
        title: 'Understanding the Basics of CSS',
        body:{
            desc:'CSS, or Cascading Style Sheets, is a fundamental technology in web development. It plays a crucial role in shaping the visual presentation and layout of web pages. Understanding the basics of CSS is essential for anyone looking to design and style web content effectively.',
            paraf:'CSS allows you to control the appearance of HTML elements. Heres an example of how CSS can be used to style a simple HTML page:'    
     },
        code: '/blog/codecss.png',
        image: '/blog/css.webp',
        date: '10 October 2023'
    }
]

export async function GET(request :NextRequest){
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
  if(id){
    const detailBlog = data.find((blog) => blog.id === Number(id))
    if(detailBlog){
        return NextResponse.json({
            status: 200,
            message: 'Succes',
            data : detailBlog
        })
    }
    
    return NextResponse.json({
        status: 404,
        message: 'Not Found',
        data:{} 
    })

  }
    return NextResponse.json({
        status: 200,
        message: 'Succes',
        data 
    })
}