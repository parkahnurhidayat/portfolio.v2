"use client"
import Image from "next/image"
import Link from "next/link"
import TypeIt from "typeit-react";
import { useState, useEffect } from "react"




const DashboardPage = () => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRender(true)
        }, 11500);

        return () => clearTimeout(timer);

    }, [])

    return (
        <div id="home">
            <div className="flex px-10 justify-center items-center min-h-screen text-white flex-col ">
                <div className="flex flex-col items-center ">
                    <Image className="rounded-full" alt="profile" width={300} height={300} src="/profile/profile2.png" /><h1 className="text-3xl  text-center lg:text-4xl font-bold"><span className="text-xl xl:text-2xl text-cyan-400">
                        Hello everyone, me
                    </span><br />
                        </h1>
                        <div className="wrapper w-full xl:pt-1">
                            <svg id="svgHome" className=" xl:w-[800px]">
                                <text className="text-4xl xl:text-5xl font-primay text-center w-full" x="50%" y="50%"  text-anchor="middle">
                                    Parkah Nurhidayat
                                </text>
                            </svg>
                        </div>

                    <p className="text-slate-400 italic  text-xl text-center"> <TypeIt
                        getBeforeInit={(instance) => {
                            instance
                                .pause(400)
                                .type("Hi,I am <span class='text-red-500'> Student <span>")
                                .pause(750)
                                .delete(9)
                                .pause(500)
                                .type("<span class='text-cyan-400' >Frontend Developer</span>")
                                .pause(500)
                                .type('<br>')
                                .type("Welcome to my personal")
                                .type('<br>')
                                .type('website...')



                            // Remember to return it!
                            return instance;

                        }}
                    /></p>

                </div>

                <div className="my-5">
                    {render &&
                        <Link id="let" className="text-2xl hover:text-cyan-400 rounded-full flex items-center gap-x-2 px-7  text-white group" href={"/dashboard/home"}>Let's Start</Link>}
                </div>

            </div>
        </div>
    )
}

export default DashboardPage