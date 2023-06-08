import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
   const [err, setErr] = useState("");

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const onSubmit = (data) => {
      setErr("");
      if (data.password !== data.confirm_password) {
         setErr("Password Does not match");
         errors.confirm_password = true;
         return;
      }
      console.log(data);
   };

   return (
      <div className="hero min-h-screen flex justify-center md:justify-normal bg-[#fff0c7]">
         <div className="hero-content flex-col w-full mx-auto shadow-2xl rounded-none shadow-slate-800">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold my-8">Register Here!</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="card flex-shrink-0 w-[350px] lg:w-[900px] text-xl">
                  <div className="card-body">
                     {/* Name and email */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Name<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="text"
                              placeholder="Your Name"
                              className="input-warning input input-bordered rounded-full"
                              {...register("name", { required: true })}
                           />
                           {errors.email && (
                              <span className="text-red-500 text-base">Enter Your Full Name</span>
                           )}
                        </div>
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Email<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="text"
                              placeholder="Your Email"
                              className="input-warning input input-bordered rounded-full"
                              {...register("email", { required: true })}
                           />
                           {errors.email && (
                              <span className="text-red-500 text-base">Enter Your Email First</span>
                           )}
                        </div>
                     </div>
                     {/* Password */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Password<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="password"
                              placeholder="Your Password"
                              className="input-warning input input-bordered rounded-full"
                              {...register("password", {
                                 required: true,
                                 pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              })}
                           />
                           {errors.password && errors.password.type === "required" && (
                              <span className="text-red-500 text-base">Password is required.</span>
                           )}
                           {errors.password && errors.password.type === "pattern" && (
                              <span className="text-red-500 text-base">
                                 Password must be at least 8 characters long. Password must contain at least
                                 one capital letter and one special character.
                              </span>
                           )}
                        </div>

                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Confirm Password<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="password"
                              placeholder="Confirm Password"
                              className="input-warning input input-bordered rounded-full"
                              {...register("confirm_password", {
                                 required: true,
                                 pattern: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                              })}
                           />
                           {err && <span className="text-red-500 text-base">{err}</span>}
                           {errors.confirm_password && errors.confirm_password.type === "required" && (
                              <span className="text-red-500 text-base">Please Type Password Again!</span>
                           )}
                           {errors.confirm_password && errors.confirm_password.type === "pattern" && (
                              <span className="text-red-500 text-base">
                                 Password must be at least 8 characters long. Password must contain at least
                                 one capital letter and one special character.
                              </span>
                           )}
                        </div>
                     </div>
                     {/* Photo URL and Gender */}
                     <div className="flex flex-col lg:flex-row gap-5">
                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Photo URL<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <input
                              type="text"
                              placeholder="Your Photo URL"
                              className="input-warning input input-bordered rounded-full"
                              {...register("user_image", {
                                 required: true,
                              })}
                           />
                           {errors.user_image && (
                              <span className="text-red-500 text-base">Please Provide Your Image URL!</span>
                           )}
                        </div>

                        <div className="form-control lg:w-1/2">
                           <label className="label">
                              <span className="label-text">
                                 Gender<span className="text-red-500 text-base">*</span>
                              </span>
                           </label>
                           <select
                              required
                              className="select select-warning w-full rounded-full"
                              {...register("gender")}
                           >
                              <option disabled value="" selected>
                                 Select Gender
                              </option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                           </select>
                           {errors.gender && (
                              <span className="text-red-500 text-base">Please Provide Your Image URL!</span>
                           )}
                        </div>
                     </div>
                     <div className="form-control w-full mx-auto">
                        <label className="label">
                           <span className="label-text">
                              Number<span className="text-red-500 text-base">*</span>
                           </span>
                        </label>
                        <input
                           type="text"
                           placeholder="Your Number"
                           className="input-warning input input-bordered rounded-full"
                           {...register("number", {
                              pattern: /^\d{11}$/,
                              required: true,
                           })}
                        />
                        {errors.number && (
                           <span className="text-red-500 text-base">
                              Please Provide A valid 11 digit Number!
                           </span>
                        )}
                     </div>
                     <div className="form-control mt-6 w-1/2 mx-auto">
                        <button type="submit" className="btn bg-[#ffb038] hover:bg-[#ffbe5d] rounded-full">
                           Register
                        </button>
                     </div>
                     <div>
                        <p>
                           Already Have an Account? <Link to="/login">Login Now!</Link>
                        </p>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
