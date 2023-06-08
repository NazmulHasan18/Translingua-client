import Banner from "../Banner/Banner";
import useAuth from "../../../hooks/useAuth";
import Marquee from "react-fast-marquee";
import moment from "moment/moment";
import { useEffect, useState } from "react";

const Home = () => {
   const { user } = useAuth();
   const [time, setTime] = useState();
   useEffect(() => {
      const timer = setInterval(() => {
         setTime(moment().format("LTS"));
      }, 1000);
      return () => {
         clearInterval(timer);
      };
   }, []);
   return (
      <div>
         <Banner></Banner>
         <div className="flex lg:text-xl lg:-mt-24 lg:mb-20 font-semibold">
            <p className="bg-orange-600 text-white py-1  lg:w-[230px]  px-4 lg:py-4 lg:px-10 z-40">{time}</p>
            <Marquee>
               <p>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
         </div>
         <h2 className="font-exo text-4xl uppercase font-bold">This is home</h2>
      </div>
   );
};

export default Home;
