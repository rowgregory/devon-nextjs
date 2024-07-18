"use client";

import { DevonRichPreviewImg, TestimonialsBg } from "@/public/images";
import React from "react";
import Picture from "../components/elements/Picture";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGetTestimonialsQuery } from "@/redux/services/testimonialApi";
import { RootState, useAppSelector } from "@/redux/store";
import Spinner from "../components/Spinner";

const Testimonials = () => {
  const { isLoading } = useGetTestimonialsQuery();
  const testimonials = useAppSelector(
    (state: RootState) => state.testimonial.testimonials
  );

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${TestimonialsBg.src})` }}
        className="bg-center bg-cover fixed top-0 left-0 w-full h-[450px] z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
          <h1 className="font-bold text-5xl text-white text-center">
            Testimonials
          </h1>
          <h4 className="pt-7 md:pt-9 pb-7 font-bold text-lg text-white tracking-wider">
            Helping you get more for your real estate.
          </h4>
        </div>
      </div>
      <div className="bg-white w-full relative z-10 px-3 mt-[356px] pt-10 max-w-screen-xl mx-auto">
        {isLoading ? (
          <Spinner
            fill="fill-black"
            wAndH="w-10 h-10 mx-auto flex self-center"
          />
        ) : (
          <div className="grid grid-cols-12 gap-5 lg:gap-10 w-full mx-auto">
            {testimonials?.map((obj: any, i: number) => (
              <div
                key={i}
                className="rounded-sm border-[1px] border-gray-300 py-8 px-5 flex flex-col col-span-12 md:col-span-6"
              >
                <div className="grid grid-cols-12 gap-6">
                  <Picture
                    src={obj.img || DevonRichPreviewImg}
                    alt="Testimonial"
                    className="object-cover aspect-video md:aspect-square col-span-12 md:col-span-3 w-full rounded-sm"
                  />
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="font-bold text-2xl mb-3">{obj.title}</h3>
                    <p>{obj.desc}</p>
                  </div>
                </div>
                <div className="flex items-center mt-5 mb-3 col-span-12 md:col-span-9">
                  {Array.from({ length: 5 }, (_, index: number) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={faStar}
                      className="w-4 h-4 mr-0.5 text-amber-500"
                    />

                  ))}
                </div>
                <h4 className="text-lg">{obj.name}</h4>
                <p className="text-sm italic text-gray-500">{obj.type}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
