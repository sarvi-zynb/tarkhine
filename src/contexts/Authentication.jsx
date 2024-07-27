import axios from "axios";
import { createContext, useContext, useState } from "react";

export const AuthContext = createContext({
  isLogin: true,
  loginModal: false,
  loginPages: 1,
  setLoginPages: () => {},
  timerStatus: false,
  setTimerStatus: () => {},
  phone: "",
  code: "",
  setPhone: () => {},
  setCode: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
  handleOpenLoginModal: () => {},
  handleCloseLoginModal: () => {},
  sendOtpCode: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginModal, setLoginModal] = useState(false);
  const [loginPages, setLoginPages] = useState(1);
  const [timerStatus, setTimerStatus] = useState(false);
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [reqId, setReqID] = useState("");
  const [token, setToken] = useState("");

  const handleOpenLoginModal = () => {
    setLoginModal(true);
    setLoginPages(1);
  };

  const handleCloseLoginModal = () => {
    setLoginModal(false);
    setLoginPages(1);
    setTimerStatus(false);
    setPhone("");
  };

  // axios.defaults.headers.common["Content-Type"] = "application/json";
  // axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  // axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  //   "X-Requested-With,content-type";
  // axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  //   "GET, POST, OPTIONS, PUT, PATCH, DELETE";
  // axios.defaults.headers.common["Access-Control-Allow-Credentials"] = "true";

  const sendOtpCode = (phone) => {
    axios
      .get(`http://127.0.0.1:8000/api/users/otp?phone=${phone}`)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const Login = (phone, code) => {
    const data = {
      phone: phone,
      password: code,
      request_id: reqId,
    };
    axios
      .post("http://127.0.0.1:8000/api/users/otp", data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  const values = {
    isLogin,
    loginModal,
    loginPages,
    setLoginPages,
    timerStatus,
    setTimerStatus,
    phone,
    code,
    setCode,
    setPhone,
    handleOpenLoginModal,
    handleCloseLoginModal,
    sendOtpCode,
    Login,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
