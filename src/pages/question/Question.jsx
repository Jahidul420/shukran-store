import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css";

import React from "react";
const Question = () => {
  return (
    <div className="bg-gray-50 w-full h-auto py-40">
      <div className=" w-[50%] mx-auto text-[100px] font-austin text-center">
        <h1 className=" leading-none">ALL YOU NEED TO KNOW</h1>
      </div>
      <div className=" pb-20 pt-28 ">
        <Splide
        //   style={{ marginLeft: "100px" }}
          options={{
            drag: "free",
            arrows: false,
            perPage: 4,
            gap: "27rem",
            pagination: false,
            padding: 100,
            
          }}
        >
          <SplideSlide>
            <div className="border h-auto w-[380px] p-14 text-center bg-white">
              <p className="text-sm font-semibold">QUESTION NO 01</p>
              <h2 className="text-2xl text-semibold font-austin py-2">
                What is Chinigura Rice
              </h2>
              <p className=" text-base font-medium font-austin mt-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border h-auto w-[380px] p-14 text-center bg-white">
              <p className="text-sm font-semibold">QUESTION NO 01</p>
              <h2 className="text-2xl text-semibold font-austin py-2">
                What is Chinigura Rice
              </h2>
              <p className=" text-base font-medium font-austin mt-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border h-auto w-[380px] p-14 text-center bg-white">
              <p className="text-sm font-semibold">QUESTION NO 01</p>
              <h2 className="text-2xl text-semibold font-austin py-2">
                What is Chinigura Rice
              </h2>
              <p className=" text-base font-medium font-austin mt-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border h-auto w-[380px] p-14 text-center bg-white">
              <p className="text-sm font-semibold">QUESTION NO 01</p>
              <h2 className="text-2xl text-semibold font-austin py-2">
                What is Chinigura Rice
              </h2>
              <p className=" text-base font-medium font-austin mt-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="border h-auto w-[380px] p-14 text-center bg-white">
              <p className="text-sm font-semibold">QUESTION NO 01</p>
              <h2 className="text-2xl text-semibold font-austin py-2">
                What is Chinigura Rice
              </h2>
              <p className=" text-base font-medium font-austin mt-7">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
              </p>
            </div>
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default Question;
