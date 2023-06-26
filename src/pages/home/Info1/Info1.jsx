import { FaBookReader, FaLaptop, FaPlayCircle, FaUsers } from "react-icons/fa";

const Info1 = () => {
   return (
      <div className="container mx-auto grid grid-cols-4 gap-4">
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-gray-700 text-3xl bg-gray-200 rounded-full">
                  <FaLaptop></FaLaptop>
               </span>
               Online Tutoring
            </p>
         </div>
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-green-600 text-3xl bg-green-200 rounded-full">
                  <FaBookReader></FaBookReader>
               </span>
               30+ Courses
            </p>
         </div>
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-red-700 text-3xl bg-red-200 rounded-full">
                  <FaPlayCircle></FaPlayCircle>
               </span>
               Lifetime Access
            </p>
         </div>
         <div>
            <p className="flex gap-4 items-center text-2xl font-semibold">
               <span className="p-6 text-sky-700 text-3xl bg-sky-200 rounded-full">
                  <FaUsers></FaUsers>
               </span>
               3000+ Students
            </p>
         </div>
      </div>
   );
};

export default Info1;
