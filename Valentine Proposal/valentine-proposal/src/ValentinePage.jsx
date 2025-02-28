import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ValentinePage() {
  const [step, setStep] = useState(0);
  const [preventClose, setPreventClose] = useState(true);
  const [rejectedOnce, setRejectedOnce] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const steps = [
      () => setTimeout(() => setStep(1), 2000),
      () => setTimeout(() => setStep(2), 3000),
      () => setTimeout(() => setStep(3), 6000),
    ];
    steps.forEach((stepFn) => stepFn());
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (preventClose) {
        event.preventDefault();
        event.returnValue = rejectedOnce ? "Redirecting..." : "Choose Mee!!";
        if (rejectedOnce) {
          navigate("/no");
        }
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [preventClose, rejectedOnce, navigate]);

  const handleYesClick = () => {
    setPreventClose(false);
    navigate("/yes");
  };

  const handleNoClick = () => {
    if (!rejectedOnce) {
      alert("Choose Mee!!");
      setRejectedOnce(true);
    } else {
      navigate("/no");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center relative">
      <div className="flex gap-20">
        <div className="relative">
          <img src="/girl.jpg" alt="Pixel Girl" className="w-52 h-52" />
          {step >= 1 && (
            <motion.div
              className="absolute top-[-50px] left-[20px] bg-white p-2 rounded shadow text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Will you be my Valentine?
            </motion.div>
          )}
        </div>

        <div className="relative mt-5">
          <img src="/boy.jpg" alt="Pixel Boy" className="w-40 h-40" />
          {step >= 2 && (
            <motion.div
              className="absolute top-[-70px] left-[20px] bg-white p-2 rounded shadow text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Um, let me think...
            </motion.div>
          )}
        </div>
      </div>

      {step >= 3 && (
        <div className="mt-5 flex gap-4">
          <Button onClick={handleYesClick} className="bg-green-500 hover:bg-green-600">
            Yes
          </Button>
          <Button onClick={handleNoClick} className="bg-red-500 hover:bg-red-600">
            No
          </Button>
        </div>
      )}
    </div>
  );
}
