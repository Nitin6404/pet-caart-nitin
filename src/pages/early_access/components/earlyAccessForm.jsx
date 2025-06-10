import { useState } from "react";
import petLogo from "../../../assets/petcaart-logo.jpg";
import { Instagram, Mail, ChevronRight } from "lucide-react";
import EarlyAccessDialog from "./EarlyAccessDialog"; // Import the new dialog

const EarlyAccessForm = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className=" w-screen h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="/exp2.jpg"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      {showForm && <EarlyAccessDialog onClose={() => setShowForm(false)} />}

      <div className="w-full h-full flex flex-col justify-between items-center px-4 py-6">
        <img
          src={petLogo}
          alt="PetCaart Logo"
          className="w-40 md:w-52 object-contain"
        />

        <div className="flex flex-col justify-center items-center flex-1 text-center w-full">
          <div className="mb-4 text-4xl">👍</div>

          <div className="space-y-2 mb-6">
            <p className="uppercase font-bold text-gray-600 tracking-wide">
              We&apos;re still
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
              Cooking Our Website.
            </h1>
            <p className="text-gray-600">
              We are going to launch our website very soon.
            </p>
            <p className="text-gray-600">Stay tuned.</p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setShowForm(true);
            }}
          >
            <button
              type="submit"
              className="bg-gray-900 text-white py-2 pr-6 pl-3 rounded-full flex items-center gap-5 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg scale-100 hover:scale-105 transform"
            >
              <Mail className="bg-white text-blue-600 w-9 h-9 p-2 rounded-full" />
              <span>Notify Me</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://www.instagram.com/petcaart.official"
            target="_blank"
            className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 z-10"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessForm;
