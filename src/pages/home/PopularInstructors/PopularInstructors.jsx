import { useQuery } from "react-query";
import { fetchInstructors } from "../../../API/api";
import { useEffect } from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import InstructorCard from "../../shared/InstructorCard/InstructorCard";

const PopularInstructors = () => {
   const { data: instructors, isLoading } = useQuery("instructors", fetchInstructors);

   useEffect(() => {
      console.log(instructors?.slice(0, 6));
   }, [instructors]);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <SectionTitle
            title="Popular Teacher"
            subTitle="Unlock Fluent Proficiency with Our Esteemed Language Learning Instructors"
         />

         <div className="grid gap-5 grid-cols-2">
            {instructors.slice(0, 6).map((instructor, index) => (
               <InstructorCard instructor={instructor} index={index} key={instructor._id}></InstructorCard>
            ))}
         </div>
         <div className="text-center my-8">
            <Link to="/instructors">
               <button className="btn bg-orange-600 btn-xs text-base sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold text-base-100 ">
                  All Instructors <FaArrowRight className="text-xl"></FaArrowRight>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default PopularInstructors;
