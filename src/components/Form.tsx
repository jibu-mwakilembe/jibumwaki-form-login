function Form() {
  return (
    <>
      <div className="bg-white px-10 py-20 border-2 rounded-3xl ">
        <h1 className="text-5xl font-semibold">Welcome Back</h1>
        <p className="text-lg text-gray-500 font-medium mt-4">
          Welcome back Please enter your details
        </p>

        <div className="mt-8">
          <div>
            <label className="text-lg font-medium" htmlFor="email">
              Email
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
              type="text"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="text-lg font-medium" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent "
              type="text"
              placeholder="Enter your passord"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-8">
          <div>
            <input type="checkbox" id="remember me" />
            <label className="ml-2 text-base font-medium" htmlFor="remeber me">
              Remember Me for 30 days
            </label>
          </div>
          <button className="text-base font-medium text-violet-500">
            Forgot password
          </button>
        </div>
        <div className=" mt-8 flex flex-col gap-y-4">
          <button className="py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] bg-violet-500 text-white text-lg font-medium">
            sign-in
          </button>
          <button className="flex border-2 border-gray-200 py-3 rounded-xl justify-center items-center gap-2  active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]">
             <img className="h-20 w-20" src="./src/assets/gogle.png" />
            Signin with google
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center ">
            <p className="text-base font-medium">Don't have an account</p>
            <button className="text-base font-medium text-violet-500 ml-2">Sign up</button>
        </div>
      </div>
    </>
  );
}

export default Form;
