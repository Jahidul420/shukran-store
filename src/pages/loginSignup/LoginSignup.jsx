import React, { useState } from "react";
import loginBg from "../../assets/rice2-min.jpg";
const LoginSignup = () => {
  const [login, setLogin] = useState(false);
  const handleLogin = () => {
    setLogin(!login);
  };
  return (
    <div className="h-screen w-screen relative">
      <img
        src={loginBg}
        alt=""
        className=" absolute top-0 left-0 h-full w-full object-cover"
      />

      <div
        className={`h-full w-full flex justify-between items-center  relative `}
      >
        <div
          className={`h-[100vh] w-[50%] px-20 flex flex-col justify-center items-center text-white bg-white/30 backdrop-blur-xl fixed duration-500 ${
            login ? " translate-x-full" : ""
          } `}
        >
          {login ? (
            <button
              className="z-50 w-32 h-10 bg-white absolute top-0 right-0 text-black"
              onClick={handleLogin}
            >
              Login
            </button>
          ) : (
            <button
              className="z-50 w-32 h-10 bg-white absolute top-0 left-0 text-black"
              onClick={handleLogin}
            >
              Login
            </button>
          )}

          {login ? (
            <h1
              className={` text-2xl font-semibold ${
                login ? " opacity-100" : " opacity-0"
              } duration-500`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
              quasi facere molestiae veritatis quisquam voluptas culpa vel
              dolorum iusto a necessitatibus incidunt magnam doloribus repellat
              itaque impedit. Tenetur, dicta perspiciatis.
            </h1>
          ) : (
            <h1
              className={` text-sm ${
                login ? " opacity-0" : " opacity-100"
              } duration-500`}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores minima recusandae ad sequi omnis voluptate perspiciatis
              ducimus, quaerat iste provident ipsum officia nam aspernatur.
              Natus ex nemo tempore debitis tenetur doloremque aspernatur
              dignissimos laudantium qui dolore repellendus earum impedit
              molestias delectus deleniti, quidem consequatur, ducimus rem non
              officia! Sit, ullam.
            </h1>
          )}
        </div>
        <div className="h-full w-3/6 "></div>
        <div className="h-full w-3/6 "></div>
      </div>
    </div>
  );
};

export default LoginSignup;
