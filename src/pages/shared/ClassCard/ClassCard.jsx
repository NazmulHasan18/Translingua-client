import { motion } from "framer-motion";
import { addClass } from "../../../API/api";
import useAuth from "../../../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

const ClassCard = ({ classs }) => {
   const { user, loading } = useAuth();
   const { class_name, teacher, current_students, total_seats, image, _id, status, price, duration } = classs;

   const handelAddClass = () => {
      if (loading) {
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
      if (!user) {
         return <Navigate to="/login" replace={true}></Navigate>;
      }
      addClass(_id, user?.email);
   };

   return (
      <div>
         <motion.div whileHover={{ scale: 1.1 }}>
            <div className="card lg:card-side bg-orange-500 lg:bg-gradient-to-r from-orange-400 to-orange-700 shadow-xl">
               <figure className="lg:w-1/2 lg:ml-4">
                  <img src={image} alt="Album" />
               </figure>
               <div className="card-body">
                  <h1 className="text-4xl font-extrabold">{class_name}</h1>
                  <h2 className="text-2xl font-bold">
                     Teacher: <span className="">{teacher.name}</span>
                  </h2>

                  <p className="font-bold">
                     Current Student: <span className="font-semibold">{current_students}</span>
                  </p>
                  <div className="flex gap-4">
                     <p className="font-semibold">
                        Price: <span className="">$ {price}</span>
                     </p>
                     <p className="font-semibold">
                        Duration: <span className="">{duration} Month</span>
                     </p>
                  </div>

                  <p className="font-semibold">Available Seats: {total_seats - current_students}</p>

                  <div className="flex justify-end">
                     {status !== "approved" || total_seats - current_students <= 0 ? (
                        <button className="btn btn-disabled my-5 bg-red-600 hover:bg-orange-400 text-white border-white hover:border-none">
                           Add To Class &gt;
                        </button>
                     ) : user ? (
                        <button
                           onClick={handelAddClass}
                           className="btn bg-orange-600 my-5 hover:bg-orange-400  hover:border-none text-white"
                        >
                           Add To Class &gt;
                        </button>
                     ) : (
                        <Link to="/login">
                           <button className="btn bg-orange-600 my-5 hover:bg-orange-400  hover:border-none text-white">
                              Add To Class &gt;
                           </button>
                        </Link>
                     )}
                  </div>
               </div>
            </div>
         </motion.div>
      </div>
   );
};

export default ClassCard;
