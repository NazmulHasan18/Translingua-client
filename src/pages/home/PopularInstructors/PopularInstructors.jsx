import { useQuery } from "react-query";
import { fetchInstructors } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import InstructorCard from "../../shared/InstructorCard/InstructorCard";

const PopularInstructors = () => {
   const { data: instructors, isLoading } = useQuery("instructors", fetchInstructors);

   if (isLoading) {
      return <div>Loading...</div>;
   }

   return (
      <div>
         <SectionTitle
            title="Popular Teacher"
            subTitle="Unlock Fluent Proficiency with Our Esteemed Language Learning Instructors"
         />

         <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 w-11/12 mx-auto">
            {instructors.slice(0, 6).map((instructor, index) => (
               <InstructorCard instructor={instructor} index={index} key={instructor._id}></InstructorCard>
            ))}
         </div>
         <div className="text-center my-10">
            <Link to="/instructors">
               <button className="btn btn-outline text-orange-600 btn-xs md:text-xl sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold md:bottom-[20%] md:left-24">
                  All Instructors <FaArrowRight className="text-xl"></FaArrowRight>
               </button>
            </Link>
         </div>
      </div>
   );
};

export default PopularInstructors;
