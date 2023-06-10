import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cardBg1 from "../../../assets/Animated Shape.svg";
import cardBg2 from "../../../assets/Animated Shape (1).svg";

const ClassCard = ({ classs, index }) => {
   const { class_name, teacher, current_students, total_seats, image, _id } = classs;

   return (
      <div data-aos={`${index % 2 === 0 ? "fade-right" : "fade-left"}`} data-aos-duration="1500">
         <motion.div whileHover={{ scale: 1.1 }}>
            <div
               className="hero rounded-lg h-96"
               style={{ backgroundImage: `url("${index % 2 === 0 ? cardBg1 : cardBg2}")` }}
            >
               <div
                  className={`${
                     index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } hero-content flex-col justify-between w-full`}
               >
                  <img src={image} className="max-w-[330px] rounded-lg shadow-2xl" />
                  <div className={`${index % 2 === 0 && "text-end"} space-y-4 my-5`}>
                     <h1 className="text-4xl text-white font-bold">{class_name}</h1>
                     <h2 className="text-2xl font-bold">
                        Teacher: <span className="text-white">{teacher.name}</span>
                     </h2>

                     <p className="text-xl font-semibold">Current Student: {current_students}</p>
                     <p className="text-xl font-semibold">
                        Available Seats: {total_seats - current_students}
                     </p>

                     <Link to={`/instructor/${_id}`}>
                        <button className="btn bg-orange-600 hover:bg-orange-400 text-white hover:border-none">
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

export default ClassCard;
