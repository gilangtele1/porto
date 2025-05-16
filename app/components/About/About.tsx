"use client";

import SplitText from "../SplitText/SplitText";

const SplitTextAbout = () => {
  const handleAnimationComplete = () => {
    console.log("Animasi selesai!");
  };

  return (
    <SplitText
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec neque ex, commodo vitae auctor id, malesuada quis orci. Maecenas imperdiet, neque eget ultrices ornare, nisi turpis aliquet libero, sit amet rhoncus sem ipsum vitae neque. In blandit consectetur odio non interdum."
      className="text-2xl text-center tracking-wide leading-relaxed"
      delay={50}
      animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      easing={(t) => t}
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
};

export default SplitTextAbout;
