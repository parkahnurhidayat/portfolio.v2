'use client'
import HomePageView from "@/app/view/Dashboard/Home/page"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HomePage =()=>{
    useEffect(() => {
        AOS.init({
          duration: 2000
        });
        
      })
    return (
       <HomePageView/>
    )
}

export default HomePage