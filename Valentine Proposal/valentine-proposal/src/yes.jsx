import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function YesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000); // Redirect back after 5 sec
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white-100 text-center">
      <h1 className="text-3xl mb-8">Yay!</h1>
      <img src="/happy-girl.gif" alt="Happy GIF" className="w-40 h-40" />
    </div>
  );
}
