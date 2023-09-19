
import Image from "next/image"
import Link from "next/link"


const DashboardPage = () => {

    return (
        <div id="home">
            <div className="flex justify-center items-center min-h-screen text-white flex-col">
                <div className="flex flex-col items-center">
                    <Image className="rounded-full" alt="profile" width={300} height={300} src="/profile/profile2.png" /><h1 className="text-4xl pt-5 font-bold">Hi,My name iS Parkah Nurhidayat </h1>
                    <p className="text-slate-500">I am a Frontend Developer</p>
                    <p className="text-slate-500">welcome to my personal website</p>
                </div>
                <div className="my-5"><Link className="text-2xl rounded-full hover:text-red-500  hover:ring-white hover:ring-2 px-4 py-1 text-white" href={"/dashboard/home"}>Let's Start</Link></div>
            </div>
        </div>
    )
}

export default DashboardPage