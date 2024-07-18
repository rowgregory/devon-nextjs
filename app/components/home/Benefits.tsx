import { Benefit1, Benefit2, Benefit3, Benefit4 } from "@/public/images";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto mb-32 px-3 sm:px-10">
      <div className="grid grid-cols-12 gap-y-10 items-center">
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-3xl font-semibold mb-7">
            Benefits of working with me
          </h1>
          <p className="mb-10">
            I am here for those who require a 100% transparent, undeniably ethical Realtor; representing sellers, buyers, investors and anyone seeking knowledge to level up.
          </p>
          <ul>
            <li className="list-disc ml-6 mb-2">
              I will never hurry you through the home-finding process.
            </li>
            <li className="list-disc ml-6 mb-2">
              I go above and beyond to find off-market and ignored homes.
            </li>
            <li className="list-disc ml-6 mb-2">
              I provide you the confidence-boosting counsel you need.
            </li>
            <li className="list-disc ml-6 mb-2">
              I promise maximum care, detail, and devotion.
            </li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <Image
              src={Benefit1}
              alt="Benefit of working with me"
              sizes="100vw"
              width="0"
              height="0"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover"
            />
            <Image
              src={Benefit2}
              alt="Benefit of working with me"
              sizes="100vw"
              width="0"
              height="0"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover"
            />
            <Image
              src={Benefit3}
              alt="Benefit of working with me"
              sizes="100vw"
              width="0"
              height="0"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover"
            />
            <Image
              src={Benefit4}
              alt="Benefit of working with me"
              sizes="100vw"
              width="0"
              height="0"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
