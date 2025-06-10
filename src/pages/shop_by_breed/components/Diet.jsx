import DietProcess from "./DietProcess";
import HomeCookedFood from "./HomeCookedFood";

const Diet = () => {
  return (
    <div className="w-full  overflow-hidden">
      {/* Header */}
      <div className="flex justify-start space-x-4 uppercase py-4 px-8">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">Diet</h1>
      </div>

      {/* Description */}
      <p className="text-3xl text-[#181818] py-4 px-8">
        Consider following tips when choosing food for your German Shepherds.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-28 mb-52">
        <div className="col-span-1">
          <div className="relative max-h-[500px]">
            <img
              src="/german-shepherd-3.png"
              alt="Dog 1" 
              className="-mt-24 absolute top-16 left-0 z-10 lg:h-[500px] lg:w-[700px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-cover"
            />
            <img
              src="/dotted-3.png"
              alt="dotted third bg"
              className="-mt-24 absolute top-[38px] -left-10 z-20 lg:h-[550px] lg:w-[750px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-contain"
            />
          </div>
        </div>

        <div className="col-span-1 p-4 flex items-center justify-center">
          <div className="text-start">
            <p className="font-medium text-[42px] leading-[132%] mt-5">
              <i>
                German Shepherds thrive on a high-protein, balanced diet rich in
                animal-based proteins, healthy fats, and essential vitamins to
                support their active lifestyle and joint health.
              </i>
            </p>
          </div>
        </div>
      </div>

      <DietProcess />

      <HomeCookedFood />
    </div>
  );
};

export default Diet;
