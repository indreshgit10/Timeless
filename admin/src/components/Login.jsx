import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmithandler = async (e) => {
    e.preventDefault(); 
    console.log(email, password);
  };

  return (
    <div className="bg-white shadow-md rounded-lg px-6 max-w-md mx-auto mt-24 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Access</h1>

      <form onSubmit={onSubmithandler}>
        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Email Address
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
            type="email"
            placeholder="yourname@gmail.com"
            required
          />
        </div>

        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">
            Password
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black hover:bg-gray-500 text-white w-full font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
