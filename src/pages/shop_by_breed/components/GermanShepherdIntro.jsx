const GermanShepherdIntro = () => {
  return (
    <div className="w-full px-8 space-y-8 overflow-x-hidden">
      <div className="flex justify-start space-x-4 uppercase">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">German Shepherd</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Image Section */}
        <div className="col-span-1 bg-[#EBEBEB] p-4 rounded-3xl">
          <div className="bg-[#C7C7C7] rounded-2xl border-2 border-[#6A6868] border-dashed flex flex-col">
            <div className="relative">
              <img src="/german-shepherds.png" alt="Dog 1" className="-mt-24" />
            </div>
            <div className="p-4 text-start text-[#181818] text-2xl">
              <p className="font-medium">
                <span className="text-[#F59A11]">German Shepherd </span>
                The Canine All-Stars - Protecting, Serving, and Winning Hearts
              </p>
            </div>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="col-span-2 flex flex-col gap-8">
          {/* Color, Weight, Height */}
          <div className="bg-[#FFEACD] p-4 rounded-3xl">
            <div className="text-2xl font-medium text-[#181818] rounded-2xl border-2 border-dashed border-[#F59A11] bg-[#FFE3B9] px-4 py-0 grid grid-rows-3 gap-4">
              <div className="flex justify-between ">
                <div className="flex items-center gap-2">
                  <img
                    src="/color-icon.png"
                    alt="icon"
                    className="object-cover w-7 h-7"
                  />
                  <p className="">Color</p>
                </div>
                <div className="flex space-x-7">
                  <span
                    className="text-white px-8 py-3 w-[220px] text-center font-normal rounded-b-md text-xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #50351C 0%, #B67940 20.67%, #D79659 36.54%, #B57840 52.39%, #50351C 100%)",
                    }}
                  >
                    Black & Tan
                  </span>
                  <span
                    className="text-white px-8 py-3 w-[220px] text-center font-normal rounded-b-md text-xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #000000 0%, #292929 20.67%, #424141 36.54%, #292929 52.39%, #000000 100%)",
                    }}
                  >
                    Black
                  </span>
                  <span
                    className="text-[#333] border px-8 py-3 w-[220px] text-center font-normal rounded-b-md text-xl"
                    style={{
                      background:
                        "linear-gradient(90deg, #FFFFFF 0%, #E3E3E3 20.19%, #AFADAD 37.5%, #E3E3E3 62.02%, #FFFFFF 100%)",
                    }}
                  >
                    White
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/weight-icon.png"
                    alt="icon"
                    className="object-cover w-7 h-7"
                  />
                  <p className="">Weight</p>
                </div>
                <p className="text-2xl text-[#004E6A] font-normal space-x-10">
                  <span>30-40kgs (male)</span>
                  <span>25-35kgs (female)</span>
                </p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/height-icon.png"
                    alt="icon"
                    className="object-cover w-7 h-7"
                  />
                  <p className="">Height</p>
                </div>
                <p className="text-2xl font-normal text-[#004E6A] space-x-10">
                  <span>61-66cm (male)</span>
                  <span>56-61cm (female)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Life, Size, Shedding, Coat */}
          <div className="bg-[#E6F3F7] p-4 rounded-3xl">
            <div className="font-medium text-2xl text-[#181818] rounded-2xl border-2 border-dashed border-[#0888B1] bg-[#BADEE9] px-4 py-2 grid grid-rows-4 gap-4">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img src="/life-icon.png" alt="icon" className="object-cover w-6 h-6" />
                  <p className="">Life expectancy:</p>
                </div>
                <p className="text-[#004E6A]">10–12 years</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img src="/size-icon.png" alt="icon" className="object-cover w-6 h-6" />
                  <p className="">Size:</p>
                </div>
                <p className="text-[#004E6A]">Large</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img src="/shedding-icon.png" alt="icon" className="object-cover w-6 h-6" />
                  <p className="">Shedding:</p>
                </div>
                <p className="text-[#004E6A]">High</p>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <img src="/goat-icon.png" alt="icon" className="object-cover w-6 h-6" />
                  <p className="">Coat:</p>
                </div>
                <p className="text-[#004E6A]">Straight or wavy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GermanShepherdIntro;
