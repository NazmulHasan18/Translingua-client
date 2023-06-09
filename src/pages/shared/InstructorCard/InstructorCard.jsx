import { motion } from "framer-motion";
import instructorImg from "../../../assets/Nazmul Hasan.jpg";

const InstructorCard = ({ instructor, index }) => {
   return (
      <div>
         <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <div className="hero bg-[#fff1e2]">
               <div
                  className={`${
                     index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } hero-content flex-col justify-between w-full`}
               >
                  <img src={instructorImg} className="max-w-[330px] rounded-lg shadow-2xl" />
                  <div className={`${index % 2 === 0 && "text-end"} space-y-4 my-5`}>
                     <h1 className="text-5xl text-orange-600 font-bold">{instructor.name}</h1>
                     <p className="text-2xl font-semibold">Language: {instructor.languages_taught[0]}</p>
                     <p className="text-xl font-semibold">Current Student: {instructor.current_students}</p>
                     <p className="text-lg font-semibold">
                        Available Seats: {instructor.total_seats - instructor.current_students}
                     </p>
                     <p className="text-lg text-red-600 font-bold">Price: ${instructor.price}</p>

                     <button className="btn bg-orange-600  btn-xs text-base sm:btn-sm md:btn-md lg:btn-l btn-warning font-bold text-base-100 ">
                        Details &gt;
                     </button>
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default InstructorCard;
