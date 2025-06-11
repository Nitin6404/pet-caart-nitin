import { ArrowUpRight } from "lucide-react";

const TrainingProcess = () => {
  const products = [
    { id: 1, name: "Chicken Based Food", image: "/food.png" },
    { id: 2, name: "Chicken Based Food", image: "/food.png" },
    { id: 3, name: "Chicken Based Food", image: "/food.png" },
    { id: 4, name: "Chicken Based Food", image: "/food.png" },
    { id: 5, name: "Chicken Based Food", image: "/food.png" },
    { id: 6, name: "Chicken Based Food", image: "/food.png" },
  ];

  const instructions = [
    {
      id: 1,
      title: "Choose a protein-rich diet",
      description:
        "German Shepherds are a high energy level and require a high protein diet to support their active lifestyle. Look for dog food with at least 18-25% protein for adult German Shepherds and even more for growing puppies.",
    },
    {
      id: 2,
      title: "Avoid fillers & additives",
      description:
        "German Shepherds have a sensitive stomach and should avoid food that includes fillers such as wheat and soy that are difficult to digest and may cause stomach upset.",
    },
  ];

  const ProductCard = ({ product, index }) => (
    <div className="relative flex justify-center items-center">
      <div className="p-4 flex flex-col justify-center items-center">
        <img
          src={product.image}
          alt={product.name}
        className="object-cover lg:w-[250px] lg:h-[170px] md:w-[200px] md:h-[150px] w-[150px] h-[100px]"
        />
        <h3 className="text-xl font-medium text-[#181818] text-center">
          {product.name}
        </h3>
      </div>
      <div className="h-10 w-10">
        <div className="absolute flex justify-center items-center top-0 right-0 bg-[#F59A11] text-white rounded-lg w-8 h-8 ">
          <ArrowUpRight className="w-5  h-5 " />
        </div>
      </div>
    </div>
  );

  const InstructionCard = ({ instruction, isLeft }) => (
    <div
      className={`bg-[#E6F3F7] p-6 tracking-[0.57px] leading-[38px] ${
        isLeft ? "rounded-r-3xl" : "rounded-l-3xl"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="text-[#F59A11] rounded-full text-start leading-none flex items-center justify-center text-[60px] font-bold">
          {instruction.id}
        </div>
        <div className="border-2 border-dashed border-[#0888B1] p-4 rounded-2xl bg-[#BADEE9] space-y-4">
          <h3 className="font-medium text-[#181818] text-[32px]">
            {instruction.title}
          </h3>
          <p className="text-[28px] text-[#323232]">
            {instruction.description}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div className="space-y-8">
        {instructions.map((instruction, index) => {
          const isLeft = index % 2 === 0;
          const productIndices = [index * 2, index * 2 + 1, index * 2 + 2]; // Indices of products for each instruction
          return (
            <div className="grid grid-cols-5 gap-8 items-center" key={instruction.id}>
              {isLeft ? (
                <>
                  <div className="col-span-2">
                    <InstructionCard instruction={instruction} isLeft={true} />
                  </div>
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    {productIndices.map(
                      (productIndex) =>
                        products[productIndex] && (
                          <ProductCard
                            key={products[productIndex]?.id}
                            product={products[productIndex]}
                            index={productIndex}
                          />
                        )
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-span-3 grid grid-cols-3 gap-4">
                    {productIndices.map(
                      (productIndex) =>
                        products[productIndex] && (
                          <ProductCard
                            key={products[productIndex]?.id}
                            product={products[productIndex]}
                            index={productIndex}
                          />
                        )
                    )}
                  </div>
                  <div className="col-span-2">
                    <InstructionCard instruction={instruction} isLeft={false} />
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrainingProcess;