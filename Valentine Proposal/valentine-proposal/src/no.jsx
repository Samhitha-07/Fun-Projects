import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000); // Redirect back after 5 sec
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl mb-8">Nooo!!!</h1>
      <img src="/rejected-girl.gif" alt="Sad GIF" className="w-40 h-40" />
    </div>
  );
}
