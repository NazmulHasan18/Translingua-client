import { motion } from "framer-motion";
import instructorImg from "../../../assets/Nazmul Hasan.jpg";
import { Link } from "react-router-dom";

const InstructorCard = ({ instructor, index }) => {
   const { name, current_students, _id, languages_taught, teaching_experience } = instructor;

   return (
      <div data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`} data-aos-duration="1500">
         <motion.div whileHover={{ scale: 1.1 }}>
            {/* <div className="hero h-[380px] bg-[#fff1e2]">
            <div
               className={`${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
               } hero-content flex-col justify-between w-full`}
            >
               <img src={instructorImg} className="max-w-[330px] rounded-lg shadow-2xl" />
               <div className={`${index % 2 === 0 && "text-end"} space-y-4 my-5`}>
                  <h1 className="text-5xl text-orange-600 font-bold">{instructor.name}</h1>

                  <p className="text-xl font-semibold">Current Student: {instructor.current_students}</p>

                  <Link to={`/instructor/${instructor._id}`}>
                     <button className="btn bg-orange-600  btn-xs text-base sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold text-base-100 ">
                        Details &gt;
                     </button>
                  </Link>
               </div>
            </div>
         </div> */}
            <div className="card mx-auto card-compact w-96 bg-orange-50 shadow-xl rounded-none">
               <figure>
                  <img src={instructorImg} alt={name} />
               </figure>
               <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>
                     <span className="font-semibold">Language Taught:</span>{" "}
                     {languages_taught.map((language, index) => (
                        <span key={index}> {language},</span>
                     ))}
                  </p>
                  <p>
                     <span className="font-semibold">Experience: </span>
                     {teaching_experience}
                  </p>
                  <p>
                     <span className="font-semibold">Guided: </span>
                     {current_students} Student {"(Last Months)"}
                  </p>
                  <div className="card-actions justify-end">
                     <Link to={`/instructor/${_id}`}>
                        <button className="btn btn-outline border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-none">
                           Details &gt;
                        </button>
                     </Link>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default InstructorCard;
