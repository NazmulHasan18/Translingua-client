import { Parallax } from "react-parallax";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { useQuery } from "react-query";
import { fetchInstructors } from "../../API/api";
import InstructorCard from "../shared/InstructorCard/InstructorCard";

const Instructors = () => {
   const { data: instructors, isLoading } = useQuery("instructors", fetchInstructors);

   if (isLoading) {
      return <div>Loading ...</div>;
   }

   return (
      <div>
         <Parallax
            bgImage="https://i.ibb.co/V01shdB/instructors-banner-2.png"
            bgImageAlt="the cat"
            strength={200}
         >
            <div className=" m-40 flex justify-center items-center flex-col" style={{ height: "300px" }}>
               <h2 className="text-6xl font-bold mb-5">Instructors</h2>
               <p className="text-xl px-6 py-5 font-semibold border-t-4">All Your Mentor In Single Page</p>
            </div>
         </Parallax>
         <SectionTitle title="All Instructors" subTitle="Don't Trim Your Dream Let It Grow"></SectionTitle>
         <div className="grid gap-5 grid-cols-2 mb-24">
            {instructors.map((instructor, index) => (
               <InstructorCard instructor={instructor} index={index} key={instructor._id}></InstructorCard>
            ))}
         </div>
      </div>
   );
};

export default Instructors;
