import { useQuery } from "react-query";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { fetchPopularClasses } from "../../../API/api";
import ClassCard from "../../shared/ClassCard/ClassCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const PopularClasses = () => {
   const { data: classes, isLoading } = useQuery("classes", fetchPopularClasses);
   if (isLoading) {
      return (
         <>
            <span className="loading-lg loading loading-spinner text-primary"></span>
            <span className="loading-lg loading loading-spinner text-secondary"></span>
            <span className="loading-lg loading loading-spinner text-accent"></span>
            <span className="loading-lg loading loading-spinner text-neutral"></span>
            <span className="loading-lg loading loading-spinner text-info"></span>
            <span className="loading-lg loading loading-spinner text-success"></span>
            <span className="loading-lg loading loading-spinner text-warning"></span>
            <span className="loading-lg loading loading-spinner text-error"></span>
         </>
      );
   }

   return (
      <div>
         <SectionTitle
            title="Popular Classes"
            subTitle="Student Are Showing More Interest In These Class"
         ></SectionTitle>
         <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 mx-auto">
            {classes.map((classs) => (
               <ClassCard classs={classs} key={classs._id}></ClassCard>
            ))}
         </div>
         <div className="text-center my-10">
            <Link to="/classes">
               <button className="btn btn-outline text-orange-600 btn-xs md:text-xl sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold md:bottom-[20%] md:left-24">
                  All Classes <FaArrowRight className="text-xl"></FaArrowRight>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default PopularClasses;
