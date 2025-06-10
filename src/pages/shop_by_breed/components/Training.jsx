import TrainingProcess from "./TrainingProcess";
import HomeCookedFood from "./HomeCookedFood";

const Training = () => {
  return (
    <div className="w-full  overflow-hidden">
      {/* Header */}
      <div className="flex justify-start space-x-4 uppercase py-4 px-8">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">
          GERMAN SHEPHERD TRAINING
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="col-span-1">
          <div className="flex justify-center items-center">
            <img
              src="/german-shepherd-4.png"
              alt="Dog 1"
              className="object-contain"
            />
            {/* <img
              src="/dotted-3.png"
              alt="dotted third bg"
              className="-mt-24 absolute top-[38px] -left-10 z-20 lg:h-[550px] lg:w-[750px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-contain"
            /> */}
          </div>
        </div>

        <div className="col-span-1 p-4 flex items-center justify-center">
          <div className="text-start">
            <p className="font-medium text-[42px] leading-[132%] mt-5">
              <i>
                German Shepherds thrive on regular exercise and mental
                stimulation. Here are some activities to keep them happy and
                healthy.
              </i>
            </p>
          </div>
        </div>
      </div>

      <TrainingProcess />
    </div>
  );
};

export default Training;
