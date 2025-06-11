import GroomingProcess from "./GroomingProcess";

const Grooming = () => {
  return (
    <div className="w-full  overflow-hidden">
      {/* Header */}
      <div className="flex justify-start space-x-4 uppercase py-4 px-8">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">
          GERMAN SHEPHERD Grooming
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">


        <div className="col-span-1 p-4 flex items-center justify-center">
          <div className="text-start">
            <p className="font-medium text-[42px] leading-[132%] mt-5">
              <i>
                German Shepherds have relatively low grooming needs despite having dense and medium-length coats. Here are some essential tips to ensure they shine.

              </i>
            </p>
          </div>
        </div>

                <div className="col-span-1">
          <div className="flex justify-center items-center">
            <img
              src="/german-shepherd-5.png"
              alt="Dog 1"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <GroomingProcess />
    </div>
  );
};

export default Grooming;
