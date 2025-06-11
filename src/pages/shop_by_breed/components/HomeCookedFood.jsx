import { useEffect, useRef } from "react";
import RotatingImage from "./RotateImage";
import { ArrowUpRight } from "lucide-react";

const HomeCookedFood = () => {
  const homeCookedFoodRef = useRef(null);
  const homeCookedFood = [
    "/food.png",
    "/food.png",
    "/food.png",
    "/food.png",
    "/food.png",
    "/food.png",
  ];

  useEffect(() => {
    let rotation = 0;
    let animationFrameId;

    const rotateImage = () => {
      if (homeCookedFoodRef.current) {
        rotation = (rotation + 1) % 360;
        homeCookedFoodRef.current.style.transform = `rotate(${rotation}deg)`;
        animationFrameId = requestAnimationFrame(rotateImage);
      }
    };

    rotateImage(); // start rotating on mount

    return () => cancelAnimationFrame(animationFrameId); // cleanup on unmount
  }, []);

  return (
    <div className="w-full px-8 space-y-8 overflow-x-hidden my-5">
      <div className="flex justify-start space-x-4 items-center">
        <img
          ref={homeCookedFoodRef}
          src="/home-cooked-food.png"
          alt="paws"
          className="w-[100px] h-[100px]" // add your desired size
        />
        <div className="flex flex-col">
          <h1 className="font-bold text-[44px] tracking-[0.75px] leading-[100%] text-[#0888B1]">
            Home Cooked Food
          </h1>
          <h1 className="font-bold text-[44px] tracking-[0.75px] leading-[100%] text-[#0888B1]">
            Must Contain:
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col text-[40px] leading-[132%] tracking-[0.57px] space-y-8">
          <p>
            Preparing home-cooked meals may be time consuming and nutritionally
            incomplete, consider adding food toppers or supplements to make up
            for the lack of nutrients.
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-y-8 ">
            {homeCookedFood.map((food, idx) => (
              <div className="col-span-1" key={idx}>
                <div className="w-full flex justify-end">
                  <div className=" bg-[#F59A11] w-8 h-8 rounded-md flex justify-center items-center">
                    <ArrowUpRight className="text-white" />
                  </div>
                </div>
                <img src={food} alt="food" />
                <p className="text-xl font-medium text-center">Chiken Based Food</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <RotatingImage src={"/dog-food.png"} alt={"Rotating Food"} />
        </div>
      </div>
    </div>
  );
};

export default HomeCookedFood;
