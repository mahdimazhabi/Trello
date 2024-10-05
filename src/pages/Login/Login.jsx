import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import IsLogin from "../../context/IsLogin";

const Login = () => {
  const [valueInputUsername, setvalueInputUsername] = useState("");
  const [valueInputPassword, setvalueInputPassword] = useState("");

  const { setDataUser } = useContext(IsLogin);

  const SendDataHandler = () => {
    const userId = Date.now();

    const userData = {
      id: userId,
      username: valueInputUsername,
      password: valueInputPassword,
    };

    setDataUser((prevData) => [...prevData, userData]);

    setvalueInputUsername("");
    setvalueInputPassword("");
  };

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bg-white/20 backdrop-blur-xl p-8 rounded-xl shadow-md">
        <h1 className="text-center text-white font-semibold mb-6 text-2xl">
          Form Login
        </h1>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="px-4 py-2 border rounded-lg outline-none"
            onInput={(e) => setvalueInputUsername(e.target.value)}
            value={valueInputUsername}
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 border rounded-lg outline-none"
            onInput={(e) => setvalueInputPassword(e.target.value)}
            value={valueInputPassword}
          />

          {/* Conditionally render the Login button based on input validity */}
          {valueInputUsername !== "" && valueInputPassword !== "" ? (
            <Link to={"/"} className="flex justify-center">
              <button
                className="bg-slate-200 w-1/2 mx-auto py-1.5 rounded font-bold"
                onClick={SendDataHandler}
              >
                Login
              </button>
            </Link>
          ) : (
            <button
              disabled
              className="bg-gray-400 w-1/2 mx-auto py-1.5 rounded font-bold opacity-50 cursor-not-allowed"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Login;
