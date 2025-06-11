import ScrollableBanners from "../../../components/ScrollableBanners";

const Traits = () => {
  return (
    <div className="w-full px-8 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-start space-x-4 uppercase my-4">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">Traits</h1>
      </div>

      {/* Description */}
      <p className="text-[32px] text-[#004E6A] my-4">
        These attributes have been rated by dog trainers, expert vets and pet
        behaviorists. Remember that all dogs are individuals with their own
        personalities.
      </p>

      {/* Traits Circle Section */}
      <div className="relative w-full flex justify-center items-center mt-16 mb-10">
        {/* Trait Labels Positioned Around the Circle */}
        {[
          {
            label: "Playfulness",
            score: "4/5",
            className: "top-[-5%] left-1/2 -translate-x-1/2 z-50",
          },
          {
            label: "Friendliness",
            score: "4/5",
            className: "top-[3%] right-[35%] z-50",
          },
          {
            label: "Good With Other Dogs",
            score: "4/5",
            className: "top-[30%] right-[28%] -translate-y-1/2",
          },
          {
            label: "First Time Ownership",
            score: "4/5",
            className: "top-1/2 right-[27%] z-50",
          },
          {
            label: "Barking Tendancies",
            score: "4/5",
            className: "top-1/2 left-[27%] z-50",
          },
          {
            label: "Energy Level",
            score: "5/5",
            className: "top-[30%] left-[28%] -translate-y-1/2",
          },
          {
            label: "Good With Kids",
            score: "4/5",
            className: "top-[3%] left-[35%] z-50",
          },
        ].map((trait, idx) => (
          <div
            key={idx}
            className={`absolute text-center text-[#2E2E2E] ${trait.className} border-8 border-l-[#F59A11] border-t-[#F59A11] border-b-[#F59A11] rounded-full lg:w-[72px] lg:h-[72px] md:w-[60px] md:h-[60px] w-[50px] h-[50px] flex flex-col justify-center items-start`} 
          >
            <p className="font-bold text-[33px]">{trait.score}</p>
              <div className="relative">
                <p className="absolute -bottom-5 text-xl font-medium text-[#004E6A] ">{trait.label}</p>
              </div>
          </div>
        ))}

        {/* Dog Name Circle */}
        {/* Dog Name Circle */}
        <div
          className="relative w-[420px] h-[420px] rounded-full flex items-center justify-center my-20"
          style={{
            background:
              "linear-gradient(90deg, #1C83A8 0%, #48BDE6 31.48%, #2F90B3 75%, rgba(19, 120, 157, 0.901961) 100%)",
          }}
        >
          {/* Curved Text */}
          <svg className="absolute w-full h-full" viewBox="0 0 420 420">
            <defs>
              <path
                id="text-circle"
                d="M 210, 210 m -160, 0
           a 160,160 0 1,1 320,0
           a 160,160 0 1,1 -320,0"
              />
            </defs>
            <text
              fill="#FFFBF6"
              fontSize="40"
              fontWeight="bold"
              letterSpacing="4"
            >
              <textPath
                href="#text-circle"
                startOffset="25%"
                textAnchor="middle"
              >
                GERMAN SHEPHERD
              </textPath>
            </text>
          </svg>

          {/* Dog Image */}
          <img
            src="/german-shepherd-2.png"
            alt="dog"
            className="absolute -bottom-16 -right-10 lg:w-[410px] lg:h-[550px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] object-contain z-10"
          />

          {/* Dotted Line Image */}
          <img
            src="/dotted-2.png"
            alt="dotted"
            className="absolute -bottom-14 -right-16 lg:w-[420px] lg:h-[150px] md:w-[400px] md:h-[100px] w-[300px] h-[100px] z-0"
          />
        </div>
      </div>

      {/* Note */}
      <p className="text-2xl text-[#323232] font-semibold my-4">
        <span>
          <span className="text-[#F73518]">Note: </span>
        </span>
        These attributes have been rated by dog trainers, expert vets and pet
        behaviorists. Remember that all dogs are individuals with their own
        personalities.
      </p>

      <ScrollableBanners />
    </div>
  );
};

export default Traits;
