import { useState, useEffect } from "react";
import { Loader2, X, User, Mail, Phone, CheckCircle2 } from "lucide-react";
import postPetCaartResponse from "../helpers/postPetCaartResponse";
import { showToast } from "../../../components/toast";

const EarlyAccessDialog = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setIsClosing(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => {
        onClose();
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, mobile } = formData;
    const errors = {};

    if (!name.trim()) errors.name = "Name is required.";
    else if (!/^[a-zA-Z\s]+$/.test(name))
      errors.name = "Only letters and spaces allowed.";

    if (!email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Invalid email address.";

    if (!mobile.trim()) errors.mobile = "Mobile number is required.";
    else if (!/^[0-9]{10}$/.test(mobile))
      errors.mobile = "Enter a 10-digit number.";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setLoading(false);
      return;
    }

    try {
      const response = await postPetCaartResponse(formData);
      const res = response?.response;

      if (res?.success) {
        setSuccess(true);
      } else {
        showToast(res?.message, "error", "light");
      }
    } catch (error) {
      console.error(error);
      showToast("Something went wrong.", "error", "light");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        className={`relative bg-white/80 backdrop-blur-md w-full max-w-md p-8 rounded-2xl shadow-2xl border border-white/40 overflow-hidden transition-all duration-500 ${
          isClosing ? "animate-fadeOut" : "animate-fadeIn"
        }`}
      >
        {!success ? (
          <>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              onClick={onClose}
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-2xl font-extrabold text-[#335C81] text-center mb-6">
              🚀 Get Notified
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              {["name", "email", "mobile"].map((field) => (
                <div key={field} className="relative">
                  <label
                    htmlFor={field}
                    className="text-xs text-gray-500 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all"
                  >
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-0 text-[#274060]">
                      {field === "name" && <User className="w-5 h-5" />}
                      {field === "email" && <Mail className="w-5 h-5" />}
                      {field === "mobile" && <Phone className="w-5 h-5" />}
                    </div>
                    <input
                      type={field === "mobile" ? "tel" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder=" "
                      className={`peer w-full pr-4 pl-8 py-2 border border-b-black border-t-transparent border-l-transparent border-r-transparent bg-transparent text-gray-900 transition focus:border-b-[#335C81] focus:shadow-[0_1px_0_0_#335C81] focus:outline-none 
                        ${
                          formErrors[field]
                            ? "border-red-500 focus:ring-red-500"
                            : "border-gray-300 focus:ring-blue-500"
                        }
                      `}
                    />
                  </div>
                  {formErrors[field] && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors[field]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#335C81] text-white font-semibold py-3 rounded-3xl shadow-lg transition-all duration-300"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin" />
                    Submitting...
                  </div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-60 transition-all duration-500 ease-in-out">
            <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center animate-scaleIn">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            <p className="mt-4 text-lg font-semibold text-[#274060] animate-fadeInDelayed">
              You're on the list!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EarlyAccessDialog;
