"use client";

import SplitText from "./SplitText";

const SplitTextWrapper = () => {
  const handleAnimationComplete = () => {
    console.log("Animasi selesai!");
  };

  return (
    <SplitText
      text="Heyy!! Its me Gilang."
      className="text-2xl tracking-widest text-orange-500 text-center"
      delay={150}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing={(t) => t}
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
};

export default SplitTextWrapper;
