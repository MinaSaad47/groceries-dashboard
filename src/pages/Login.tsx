import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async ({ code }) => {
      setLoading(true);

      const response = await axios.post("/oauth/google", { code });
      if (response.data.status !== "success") {
        setLoading(false);
        return;
      }

      await localStorage.setItem(
        "credentials",
        JSON.stringify(response.data.data)
      );

      setLoading(false);

      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    },
  });

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 min-vw-100">
      {loading ? (
        <Spinner />
      ) : (
        <button className="btn btn-primary m-auto" onClick={googleLogin}>
          <FaGoogle className="me-2" /> Login
        </button>
      )}
    </div>
  );
};

export default Login;
