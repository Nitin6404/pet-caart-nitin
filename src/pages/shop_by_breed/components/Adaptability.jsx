const Adaptability = () => {
  return (
    <div className="w-full px-8  ">
      <div className="flex justify-start space-x-4 uppercase">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">Adaptability</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-32 mb-48">
        {/* Left Text Section */}
        <div className="col-span-2 p-4 flex flex-col justify-center">
          <div className="text-start space-y-6">
            <p className="font-medium text-[40px]">
              <i>German Shepherds</i> adapt well to both{" "}
              <span className="font-bold">hot</span> and{" "}
              <span className="font-bold">cold climates</span>, thanks to their{" "}
              <span className="font-bold">double coat</span>.
            </p>
          </div>
        </div>

        {/* Right Info Section with Dog and Background */}
        <div className="col-span-3 flex relative overflow-visible">
          <div className="space-y-3 ml-10 flex flex-col justify-center items-center">
            {/* Hot Weather Banner */}
            <div
              className="text-[#004E6A] px-4 py-2 rounded-lg flex items-center gap-2 min-w-[350px] border-2 border-[#F69B11]"
              style={{
                background:
                  "linear-gradient(270deg, #FFB653 0%, #FFCB85 29.41%, #FFECD3 51.89%, #FFCB85 73.68%, #FFB653 100%)",
              }}
            >
              <img src="/sun-temp.png" alt="sun" />
              <p className="font-medium text-xl">Hot weather tolerance:
                <br />
                up to <span className="text-[#0888B1] font-bold">28℃</span></p>
            </div>

            {/* Cold Weather Banner */}
            <div
              className="text-[#004E6A] px-4 py-2 rounded-lg flex items-center gap-2 min-w-[350px] border-2 border-[#0889B2]"
              style={{
                background:
                  "linear-gradient(270deg, #3DAEFF 0%, #9ED2F5 21.52%, #ECF9FF 50.3%, #9ED2F5 75.73%, #3DAEFF 100%)",
              }}
            >
              <img src="/ice-temp.png" alt="snow" />
              <p className="font-medium text-xl">Cold weather tolerance:
                <br />
              up to <span className="text-[#F59A11] font-bold">8℃</span></p>
            </div>
          </div>

          <div className="relative w-full h-full">
            {/* Dotted Background */}
            <div
              className="absolute -top-44 left-0 w-[515px] h-[431px]  bg-no-repeat bg-contain "
              style={{
                backgroundImage: "url('/dotted-1.png')",
                // backgroundPosition: "top right",
              }}
            />

             <div
              className="absolute -top-48 -left-24 w-[835px] h-[654px]  bg-no-repeat bg-contain "
              style={{
                backgroundImage: "url('/german-shepherd-1.png')",
                // backgroundPosition: "top right",
              }}
            />

            {/* Dog Image with Dotted Border */}
            {/* <div className="relative w-full h-full"> */}
              {/* <div className="absolute top-4 right-4 w-64 h-48"> */}
                {/* <div className=" w-full h-full relative"> */}
                  {/* <img
                    src="/german-shepherd-1.png"
                    alt="German Shepherd"
                    className="absolute -top-44 -left-5 w-[800px] h-[650px] bg-"
                  /> */}
                {/* </div> */}
              {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adaptability;
