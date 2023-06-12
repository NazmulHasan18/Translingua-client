import { useQuery } from "react-query";
import useAuth from "../../../../hooks/useAuth";
import { fetchUsers } from "../../../../API/api";
import axios from "axios";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";

const ManageUsers = () => {
   const { user: loggedUser } = useAuth();
   const { data: users, refetch } = useQuery(["users", loggedUser?.email], () =>
      fetchUsers(loggedUser?.email)
   );

   const token = localStorage.getItem("jwt-token");

   const handelMakeInstructor = async (id) => {
      const res = await axios.patch(
         `http://localhost:5000/user/${id}?email=${loggedUser?.email}`,
         { role: "instructor" },
         {
            headers: { authorization: `Bearer ${token}` },
         }
      );
      refetch();

      console.log(res.data);
   };

   return (
      <div>
         <SectionTitle title="Manage Users" subTitle=""></SectionTitle>
         <div className="overflow-x-auto mb-10">
            <table className="table text-center">
               {/* head */}
               <thead>
                  <tr>
                     <th>#</th>
                     <th>Name</th>
                     <th>Status</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users?.map((user, index) => (
                     <tr key={user._id}>
                        <td>{index + 1}</td>
                        <td>
                           <div className="flex items-center text-start gap-4">
                              <div className="avatar">
                                 <div className="mask mask-squircle w-12 h-12">
                                    <img src={user.user_image} alt="Avatar Tailwind CSS Component" />
                                 </div>
                              </div>
                              <div>
                                 <div className="font-bold">{user.name}</div>
                                 <div className="text-sm">{user.email}</div>
                              </div>
                           </div>
                        </td>
                        <td className="uppercase">{user.role}</td>

                        <td>
                           <button className="btn btn-error btn-xs">Make Admin</button>
                           <button
                              className="btn btn-warning ml-3 btn-xs"
                              onClick={() => handelMakeInstructor(user._id)}
                           >
                              Make Instructor
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default ManageUsers;
