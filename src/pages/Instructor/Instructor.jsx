import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchInstructorById } from "../../API/api";
import { Fade } from "react-awesome-reveal";

const Instructor = () => {
   const id = useParams().id;

   const { data: instructor, isLoading } = useQuery("instructor", () => fetchInstructorById(id));
   if (isLoading) {
      return <div>Loading ...</div>;
   }
   const { name, bio, languages_taught, teaching_experience, education, teaching_methodology } = instructor;

   return (
      <div className="">
         <div className="min-h-screen flex justify-between flex-col px-32 lg:flex-row items-center bg-orange-300 mb-28 gap-10">
            <div className="lg:w-1/2 z-30" data-aos="zoom-out-right">
               <img src="https://i.ibb.co/7XxhLwj/P3-OLGJ1-copy-1.png" alt="instructor image" />
            </div>
            <div className="bg-orange-400 w-1/2 min-h-[400px] p-10 space-y-5" data-aos="zoom-out-left">
               <Fade cascade damping={0.6}>
                  <h2 className="text-4xl font-semibold">
                     <Fade cascade damping={0.2}>
                        {name}
                     </Fade>
                  </h2>
                  <p>{bio}</p>
                  <p>
                     <span className="font-semibold"> Language Taught: </span>
                     {languages_taught[0]}
                  </p>
                  <p>
                     <span className="font-semibold">Teaching Experience: </span> {teaching_experience} years
                  </p>
                  <p>
                     <span className="font-semibold">Teaching Methodology:</span>
                     <br />
                     {teaching_methodology}
                  </p>
                  <p>
                     <span className="font-semibold">Education: </span> <br />
                     {education}
                  </p>
               </Fade>
            </div>
         </div>
      </div>
   );
};

export default Instructor;
