import { useQuery } from "react-query";
import useAuth from "../../../hooks/useAuth";
import { deleteClass, getClasses } from "../../../API/api";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Swal from "sweetalert2";

const BookedClasses = () => {
   const { user } = useAuth();

   const {
      data: classes,
      isLoading,
      refetch,
   } = useQuery(["selected_classes", user?.email], () => getClasses(user?.email));
   if (isLoading || !classes) {
      return <div> Loading...</div>;
   }

   const totalPrice = classes.reduce((accumulator, currentClass) => accumulator + currentClass.price, 0);

   //    TODO: Implement payment methods

   return (
      <div className="mb-24">
         <SectionTitle title="All Selected Class" subTitle="Pay your class to enroll"></SectionTitle>
         <div className="flex justify-around">
            <p className="text-xl">
               Total Price:
               <span className="font-bold"> ${totalPrice}</span>
            </p>
            <button className="btn btn-warning mb-4"> Pay All</button>
         </div>
         <div className="overflow-x-auto">
            <table className="table">
               {/* head */}
               <thead>
                  <tr className="text-center">
                     <th>#</th>
                     <th>Name</th>
                     <th>Teacher</th>
                     <th className="text-end">Price</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {classes.map((classs, index) => (
                     <tr key={classs._id} className="text-center">
                        <td>{index + 1}</td>
                        <td>
                           <div className="flex items-center space-x-3">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={classs.image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold text-lg">{classs.class_name}</div>
                                 <div className="text-sm font-semibold">{classs.duration} month</div>
                              </div>
                           </div>
                        </td>
                        <td>
                           <h4 className="text-lg font-bold">{classs.teacher.name}</h4>
                           <p>{classs.teacher.email}</p>
                        </td>
                        <td className="text-end">$ {classs.price}</td>
                        <td>
                           <span className="bg-yellow-300 py-2 px-4 font-semibold rounded-md">
                              {classs.status}
                           </span>
                        </td>
                        <th>
                           <button className="btn btn-xs btn-warning">Pay Now</button>
                           <button
                              className="btn btn-xs btn-error ml-4"
                              onClick={() => {
                                 Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!",
                                 }).then((result) => {
                                    if (result.isConfirmed) {
                                       deleteClass(classs._id, user?.email, refetch);
                                    }
                                 });
                              }}
                           >
                              Cancel
                           </button>
                        </th>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default BookedClasses;
