import useAuth from "../../../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import useUsers from "../../../../hooks/useUsers";

const ManageUsers = () => {
   const { user: loggedUser } = useAuth();
   const { users, refetchUsers, loadingUsers } = useUsers();

   console.log(users);

   const token = localStorage.getItem("jwt-token");

   if (loadingUsers) {
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

   const handelMakeInstructor = async (id) => {
      const res = await axios.patch(
         `http://localhost:5000/user/${id}?email=${loggedUser?.email}`,
         { role: "instructor" },
         {
            headers: { authorization: `Bearer ${token}` },
         }
      );
      refetchUsers();

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
                  {users.map((user, index) => (
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
