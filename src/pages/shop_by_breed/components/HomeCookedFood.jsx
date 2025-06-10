const HomeCookedFood = () => {

    const homeCookedFood = [
        "/food.png",
        "/food.png",
        "/food.png",
        "/food.png",
        "/food.png",
        "/food.png",
    ]
  return (
    <div className="w-full px-8 space-y-8 overflow-x-hidden">
      <div className="flex justify-start space-x-4">
        <img src="/home-cooked-food.png" alt="paws" />
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
        <div className="flex flex-col text-[40px] leading-[132%] tracking-[0.57px]">
            <p>Preparing home-cooked meals may be time consuming and nutritionally incomplete, consider adding food toppers or supplements to make up for the lack of nutrients.</p>
            <div className="grid grid-cols-3 grid-rows-2">
                {homeCookedFood.map((food) => (
                    <div className="col-span-1">
                        <img src={food} alt="food" />
                    </div>
                ))}
            </div>
        </div>
        <div className="flex justify-center items-center">
            <img src="/dog-food.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HomeCookedFood;
