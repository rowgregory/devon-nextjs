"use client";

import { TestimonialsBg } from "@/public/images";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useGetTestimonialsQuery } from "@/redux/services/testimonialApi";
import { RootState, useAppSelector } from "@/redux/store";
import Spinner from "../components/Spinner";
import Picture from "../components/common/Picture";
import FixedBanner from "../components/FixedBanner";

const Testimonials = () => {
  const { isLoading } = useGetTestimonialsQuery();
  const testimonials = useAppSelector(
    (state: RootState) => state.testimonial.testimonials
  );

  return (
    <div>
      <FixedBanner
        bgImg={TestimonialsBg.src}
        title="Testimonials"
        subtitle="Helping you get more for your real estate."
      />
      <div className="bg-white w-full relative z-10 px-3 pt-10 max-w-screen-xl mx-auto pb-20">
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
                    src={obj.img || "/images/devon-rich-preview.png"}
                    alt="Testimonial"
                    className="object-contain bg-black lg:object-cover aspect-video lg:aspect-square col-span-12 lg:col-span-3 w-full rounded-sm"
                    priority={false}
                  />
                  <div className="col-span-12 lg:col-span-9">
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
