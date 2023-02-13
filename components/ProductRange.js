import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline.";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const ProductRange = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white to-white w-full py-14"
      id="vision"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed"
            >
              Product Range
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Jogeshwari Industries is a well known manufacturer and exporter of quality proven metals and foundry alloys.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center">
              <div
                className="flex justify-center h-[100px] items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                
              >
                <Image
                  src="/assets/ingot.png"
                  width={250}
                  height={295}
                  alt="Ingots"
                  className="object-fill"
                />
                <p className="text-lg text-black font-medium capitalize my-2 sm:my-7">
                  Aluminium Alloy ADC 12 Ingots
                </p>
              </div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <div
                className="flex justify-center h-[100px] items-center border-2 mt-[30px] sm lg:mt-[0px]  xl:mt-0 2xl:mt-0 md:mt-[0px] border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                
              >
                <Image
                  src="/assets/yuu.png"
                  width={150}
                  height={150}
                  alt="Ingots"
                  className="object-fill"
                />
                <p className="text-lg text-black font-medium capitalize my-2 sm:my-7">
                  All grade aluminium scrap
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              We import aluminium shred from all across the world.{" "}
            </motion.h3>
            <motion.p className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              We at <strong>Jogeshwari Industries</strong> trade in Alumininum Scrap from all across the world
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}>
              <img 
              src="/svgtopng/HugeGlobal.png"
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black leading-normal w-9/12 sm: lg:w-4/12 mx-auto" id="team">
              Management- Jogeshwari Industries{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              The company is owned by <strong>Seema Mhaske</strong>, the executive director, taken care by <strong>Vishwajeet Aute</strong> as a director.  We at Jogeshwari Industries are trying to reach our ingot manufacturing unit within a quarter or quarters.
              Post starting of alloys unit we are researching for PDC industries and planning on how this Industries can takeover within Two or three years
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 1 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 border-black border-2 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Get in<br /> Touch with us!
                  </h5>
                  <p>Contact Us for more information</p>
                </div>
                <a href="mailto:jogeshwariindustries77@gmail.com">
                  <ButtonOutline>Contact Us</ButtonOutline>
                </a>
              </div>
              <div
                className="absolute bg-black opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default ProductRange;
