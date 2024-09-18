import React from "react";
import Picture from "../common/Picture";

const Benefits = () => {
  return (
    <div className="max-w-screen-xl w-full mx-auto my-32 px-3 sm:px-10">
      <div className="grid grid-cols-12 gap-y-10 gap-x-6 items-center">
        <div className="col-span-12 md:col-span-6">
          <h1 className="text-3xl font-semibold mb-7">
            Benefits of working with me
          </h1>
          <p className="mb-10">
            I am here for those who require a 100% transparent, undeniably
            ethical Realtor; representing sellers, buyers, investors and anyone
            seeking knowledge to level up.
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
            <Picture
              src="/images/benefit-1.png"
              alt="Benefit of working with me"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover w-full"
              priority={false}
            />
            <Picture
              src="/images/benefit-2.png"
              alt="Benefit of working with me"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover w-full"
              priority={false}
            />
            <Picture
              src="/images/benefit-3.png"
              alt="Benefit of working with me"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover w-full"
              priority={false}
            />
            <Picture
              src="/images/benefit-4.png"
              alt="Benefit of working with me"
              className="col-span-12 aspect-video sm:aspect-square sm:col-span-6 object-cover w-full"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
