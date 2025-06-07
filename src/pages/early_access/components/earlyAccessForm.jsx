import { useState } from "react";
import petLogo from "../../../assets/petcaart-logo.jpg";
import { Dribbble, Instagram, Linkedin, Mail } from "lucide-react";
import postPetCaartResponse from "../helpers/postPetCaartResponse";
import { Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { showToast } from "../../../components/toast";

const EarlyAccessForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setFormErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, mobile } = formData;
    const errors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.trim()) {
      errors.name = "name is required.";
    } else if (!nameRegex.test(name)) {
      errors.name = "name must contain only letters and spaces.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!mobile.trim()) {
      errors.mobile = "Mobile number is required.";
    } else if (!phoneRegex.test(mobile)) {
      errors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await postPetCaartResponse(formData);

      const res = response?.response;

      if (res?.success) {
        showToast(res?.message, "success", "light")
      } else {
        showToast(res?.message, "error", "light")
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNotifyClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div className="bg-white w-screen h-screen flex items-center justify-center">
      {showForm ? (
        <div className="w-full max-w-md bg-gray-100 rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
            Get Notified
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.name
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.email
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${
                  formErrors.mobile
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500"
                }`}
              />
              {formErrors.mobile && (
                <p className="text-red-500 text-sm mt-1">{formErrors.mobile}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {loading ? (
                <>
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2" />
                    <span>Submitting</span>
                  </div>
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      ) : (
        <div className="w-full max-w-md h-full flex flex-col justify-between items-center px-4 py-6">
          <img
            src={petLogo}
            alt="PetCaart Logo"
            className="w-40 md:w-52 object-contain"
          />

          <div className="flex flex-col justify-center items-center flex-1 text-center">
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

            <form onSubmit={handleNotifyClick}>
              <button
                type="submit"
                className="bg-gray-900 text-white py-2 pr-6 pl-3 rounded-full flex items-center gap-5 hover:bg-gray-800"
              >
                <Mail className="bg-white text-blue-600 w-9 h-9 p-2 rounded-full" />
                <span>Notify Me</span>
                <span>›</span>
              </button>
            </form>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <Dribbble className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default EarlyAccessForm;
