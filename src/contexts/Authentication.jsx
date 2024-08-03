import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({
  token: false,
  loginModal: false,
  loginPages: 1,
  setLoginPages: () => {},
  userData: {},
  setUserData: () => {},
  signUpUser: () => {},
  signInUser: () => {},
  signOut: () => {},
  handleOpenLoginModal: () => {},
  handleCloseLoginModal: () => {},
});

export const AuthProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [loginPages, setLoginPages] = useState(1);
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [token, setToken] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginModal) {
      navigate(loginPages == 1 ? "/register" : "/login", { replace: true });
    } else {
      navigate("/", { replace: true });
    }
  }, [loginModal, loginPages]);

  const handleOpenLoginModal = () => {
    setLoginModal(true);
    setLoginPages(1);
  };

  const handleCloseLoginModal = () => {
    setLoginModal(false);
    setLoginPages(1);
  };

  const signUpUser = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password: userData.password,
        options: {
          emailRedirectTo: "http://localhost:5173/branch",
          data: {
            full_name: userData.fullName,
          },
        },
      });
      console.log(data, error);
      if (error == null) {
        toast.info("Check your email for verification link");
        setToken(true);
        handleCloseLoginModal();
      }
    } catch (error) {
      toast.info(error);
    }
  };

  const signInUser = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: userData.email,
        password: userData.password,
      });
      console.log(data, error);
      if (error == null) {
        handleCloseLoginModal();
        setToken(data);
        toast.success(`${data.user.user_metadata.full_name} خوش آمدید.`);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);

  const signOut = async () => {
    let { error } = await supabase.auth.signOut();
    setToken(false);
    toast.error(error);
  };

  // axios.defaults.headers.common["Content-Type"] = "application/json";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  //   "X-Requested-With,content-type";
  // axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE";
  // axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

  // const sendOtpCode = (phone) => {
  //   axios
  //     .get(`http://127.0.0.1:8000/api/users/otp?phone=${phone}`)
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };

  // const Login = (phone, code) => {
  //   const data = {
  //     phone: phone,
  //     password: code,
  //     request_id: reqId,
  //   };
  //   axios
  //     .post("http://127.0.0.1:8000/api/users/otp", data)
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };

  const values = {
    token,
    loginModal,
    loginPages,
    setLoginPages,
    handleOpenLoginModal,
    handleCloseLoginModal,
    userData,
    setUserData,
    signUpUser,
    signInUser,
    signOut,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
