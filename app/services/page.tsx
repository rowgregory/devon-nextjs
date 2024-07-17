import React from "react";
import { Services1, Services2, Services3, ServicesBg } from "@/public/images";
import Picture from "../components/elements/Picture";
import Link from "next/link";

const Services = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${ServicesBg.src})` }}
        className="bg-center bg-cover fixed top-0 left-0 w-full h-[450px] z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-20">
          <h1 className="font-bold text-5xl text-white text-center">
            Services
          </h1>
          <h4 className="pt-7 lg:pt-9 pb-7 font-bold text-lg text-white tracking-wider">
            The only realtor you will ever want
          </h4>
        </div>
      </div>
      <div className="bg-white w-full relative z-10">
        <div className="max-w-screen-xl mx-auto w-full mt-[356px] relative z-10">
          <div className="grid grid-cols-12 pt-10 lg:pt-0">
            <Picture
              src={Services1}
              alt="Services - Buy Property"
              className="lg:h-[640px] col-span-12 w-full lg:col-span-6 aspect-video lg:aspect-square object-cover hidden lg:block"
            />
            <div className="col-span-12 lg:col-span-6 h-full px-8 lg:px-16 flex justify-center flex-col ">
              <h1 className="font-bold text-3xl mb-6">Buy Property</h1>
              <p>
                Looking to buy a property? Our dedicated team is here to guide
                you through every step of the process. Whether you're a
                first-time homebuyer or looking to invest, we offer personalized
                assistance to help you find the perfect property.
              </p>
              <ul className="mt-9">
                <li className="list-disc ml-6 mb-2">
                  Personalized consultation to understand your needs and
                  preferences.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Expert guidance on local market trends and property values.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Access to a wide range of listings tailored to your criteria.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Support throughout the negotiation and closing process for a
                  seamless transaction.
                </li>
              </ul>
              <Link
                className="w-full bg-[#9ac841] py-3 text-white font-bold tracking-wide text-center mt-20"
                href="/contact"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-12 pt-10 lg:pt-0">
            <div className="col-span-12 lg:col-span-6 h-full px-8 lg:px-16 flex justify-center flex-col">
              <h1 className="font-bold text-3xl mb-6">Sell Property</h1>
              <p>
                Ready to sell your property? Our experienced team is here to
                make the process as smooth and profitable as possible. We offer
                comprehensive market analysis, effective marketing strategies,
                and expert negotiation skills to ensure you get the best value
                for your property.
              </p>
              <ul className="mt-9">
                <li className="list-disc ml-6 mb-2">
                  Detailed market analysis to determine optimal pricing.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Professional marketing strategies to attract potential buyers.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Staging and presentation tips to enhance property appeal.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Skilled negotiation to maximize your property's value.
                </li>
              </ul>
              <Link
                className="w-full bg-[#9ac841] py-3 text-white font-bold tracking-wide text-center mt-20"
                href="/contact"
              >
                CONTACT ME
              </Link>
            </div>
            <Picture
              src={Services2}
              alt="Services - Sell Property"
              className="col-span-12 lg:col-span-6 w-full lg:h-[640px] aspect-video lg:aspect-square object-cover hidden lg:block"
            />
          </div>
          <div className="grid grid-cols-12 pt-10 lg:pt-0">
            <Picture
              src={Services3}
              alt="Services - Rent Property"
              className="col-span-12 lg:col-span-6 w-full lg:h-[640px] aspect-video lg:aspect-square object-cover hidden lg:block"
            />
            <div className="col-span-12 lg:col-span-6 h-full px-8 lg:px-16 flex justify-center flex-col">
              <h1 className="font-bold text-3xl mb-6 pt-4">Rent Property</h1>
              <p>
                Ready to sell your property? Our experienced team is here to
                make the process as smooth and profitable as possible. Looking
                to rent a property? Our knowledgeable team is dedicated to
                finding the ideal rental that meets your needs and budget. We
                provide personalized service, expert market insights, and a
                seamless process to help you secure the perfect rental home.
              </p>
              <ul className="mt-9">
                <li className="list-disc ml-6 mb-2">
                  Comprehensive listings of available rental properties.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Detailed market insights to help you make informed decisions.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Assistance with lease negotiations and agreements.
                </li>
                <li className="list-disc ml-6 mb-2">
                  Ongoing support and guidance throughout your rental journey.
                </li>
              </ul>
              <Link
                className="w-full bg-[#9ac841] py-3 text-white font-bold tracking-wide text-center mt-20"
                href="/contact"
              >
                CONTACT ME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
