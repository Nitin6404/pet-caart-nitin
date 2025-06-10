const Traits = () => {
  return (
    <div className="w-full px-8 space-y-4 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-start space-x-4 uppercase">
        <img src="/paws-orange.png" alt="paws" />
        <h1 className="font-bold text-5xl text-[#0888B1]">Traits</h1>
      </div>

      {/* Description */}
      <p className="text-2xl text-[#004E6A] ">
        These attributes have been rated by dog trainers, expert vets and pet behaviorists. Remember that all dogs are individuals with their own personalities.
      </p>

      {/* Traits Circle Section */}
      <div className="relative w-full flex justify-center items-center mt-8 mb-16">
        {/* Trait Labels Positioned Around the Circle */}
        {[
          { label: "Playfulness", score: "4/5", className: "top-0 left-1/2 -translate-x-1/2" },
          { label: "Friendliness", score: "4/5", className: "top-[20%] right-[10%]" },
          { label: "Good With Other Dogs", score: "4/5", className: "top-1/2 right-0 -translate-y-1/2" },
          { label: "First Time Ownership", score: "4/5", className: "bottom-[20%] right-[10%]" },
          { label: "Barking Tendancies", score: "4/5", className: "bottom-0 left-1/2 -translate-x-1/2" },
          { label: "Energy Level", score: "5/5", className: "bottom-[20%] left-[10%]" },
          { label: "Good With Kids", score: "4/5", className: "top-1/2 left-0 -translate-y-1/2" },
        ].map((trait, idx) => (
          <div
            key={idx}
            className={`absolute text-center text-[#2E2E2E] ${trait.className}`}
          >
            <p className="font-bold text-sm">{trait.score}</p>
            <p className="text-sm">{trait.label}</p>
          </div>
        ))}

        {/* Dog Name Circle */}
        <div className="relative w-[280px] h-[280px] rounded-full bg-gradient-to-br from-[#0888B1] to-[#004E6A] flex items-center justify-center">
          <h2 className="absolute top-4 text-white font-bold text-xl tracking-wide">GERMAN SHEPHERD</h2>
          {/* Dog Image */}
          <img
            src="/german-shepherd-2.png"
            alt="dog"
            className="absolute bottom-0 w-[180px] h-auto object-contain z-10"
          />
          {/* Dotted Line Image */}
          <img
            src="/dotted-2.png"
            alt="dotted"
            className="absolute bottom-2 w-[190px] h-auto z-0"
          />
        </div>
      </div>

      {/* Note */}
        <p className="text-xl text-black font-semibold ">
            <span><span className="text-[#F73518]">Note: {" "}</span></span>
        These attributes have been rated by dog trainers, expert vets and pet behaviorists. Remember that all dogs are individuals with their own personalities.
      </p>
    </div>
  );
};

export default Traits;
