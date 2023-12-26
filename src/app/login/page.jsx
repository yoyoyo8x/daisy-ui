"use client";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { login } from "@/redux/authSlice";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isLogin } = useSelector((store) => store.auth);

  useEffect(() => {
    if (isLogin) {
      router.push("/");
    }
  }, [isLogin, router]);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("data", data);
    dispatch(login(data));
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-lg">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            {...register("username", { required: true })}
            type="text"
            placeholder="Enter your username"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            {...register("password", { required: true })}
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <button className="btn mt-5">Login</button>
      </form>
    </div>
  );
}

export default Login;
