const Adaptability = () => {
  return (
    <div className="w-full px-8  overflow-x-hidden">
      <div className="flex justify-start space-x-4 uppercase">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">Adaptability</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
        {/* Left Text Section */}
        <div className="col-span-1 p-4 flex flex-col justify-center">
          <div className="text-start space-y-6">
            <p className="font-medium text-4xl">
              <i>German Shepherds</i> adapt well to both{" "}
              <span className="font-bold">hot</span> and{" "}
              <span className="font-bold">cold climates</span>, thanks to their{" "}
              <span className="font-bold">double coat</span>.
            </p>
          </div>
        </div>

        {/* Right Info Section with Dog and Background */}
        <div className="col-span-2 flex gap-4 relative">
          <div className="space-y-3">
            {/* Hot Weather Banner */}
            <div
              className="text-white px-4 py-2 rounded-lg flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(270deg, #FFB653 0%, #FFCB85 29.41%, #FFECD3 51.89%, #FFCB85 73.68%, #FFB653 100%)",
              }}
            >
              <span className="text-lg">🌡️</span>
              <div>
                <span className="font-semibold">Hot weather tolerance:</span>
                <br />
                <span className="text-sm">up to 28°C</span>
              </div>
            </div>

            {/* Cold Weather Banner */}
            <div
              className="text-white px-4 py-2 rounded-lg flex items-center gap-2"
              style={{
                background:
                  "linear-gradient(270deg, #3DAEFF 0%, #9ED2F5 21.52%, #ECF9FF 50.3%, #9ED2F5 75.73%, #3DAEFF 100%)",
              }}
            >
              <span className="text-lg">❄️</span>
              <div>
                <span className="font-semibold">Cold weather tolerance:</span>
                <br />
                <span className="text-sm">up to 8°C</span>
              </div>
            </div>
          </div>

          <div  className="relative">
            {/* Dotted Background */}
            <div
              className="absolute top-0 right-0 w-32 h-32 opacity-20 bg-no-repeat bg-contain"
              style={{
                backgroundImage: "url('/dotted-1.png')",
                backgroundPosition: "top right",
              }}
            />

            {/* Dog Image with Dotted Border */}
            <div className="relative mb-4">
              <div className="absolute top-4 right-4 w-64 h-48">
                <div className=" w-full h-full relative">
                  <img
                    src="/german-shepherd-1.png"
                    alt="German Shepherd"
                    className="absolute -top-4 -right-4 w-64 h-56 object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adaptability;
