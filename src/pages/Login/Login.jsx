import { useForm } from "react-hook-form";

const Login = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => console.log(data);

   // https://i.ibb.co/6Hwv8zd/Contact-1.png
   return (
      <div
         className="hero min-h-screen flex justify-center md:justify-normal bg-fixed bg-left"
         style={{ backgroundImage: "url('https://i.ibb.co/VvQnfwp/Home-1.png')" }}
      >
         <div className="hero-content flex-col lg:w-1/2">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold my-8">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full min-w-[350px] lg:max-w-lg shadow-2xl bg-base-100 text-xl">
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">
                              Email<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type="text"
                           placeholder="Email"
                           className="input input-bordered rounded-full"
                           {...register("email", { required: true })}
                        />
                        {errors.email && (
                           <span className="text-red-500 text-base">Enter Your Email First</span>
                        )}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">
                              Password<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type="password"
                           placeholder="Password"
                           className="input input-bordered rounded-full"
                           {...register("password", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-base">Enter Your Password</span>}
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">
                              Forgot password?
                           </a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
                           Login
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Login;
