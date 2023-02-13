import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const features = [
  "Manufacture of alloy ingots",
  "Trade of Aluminium scrap",
  "Trade of Aluminium Shred",
  "Manufacture of alloy ingots",
  "Import of aluminium scrap from all across the world.",
  "All types of metal business"
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl ml-auto mr-auto mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="mr-auto ml-auto  ">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full " variants={scrollAnimation}>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col   ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We believe in procuring the best material to the buyers.
            </h3>
            <p className="my-4 text-black-500">
              We have established ourselves as a brand in manufacturing/trading of ferrous and non-ferrous metals.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
