import SymbolImage from "../assets/symbol.png";

const login = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center max-h-screen max-w-[1280px] mx-auto">
      {/* symbol */}
      <div
        className="flex flex-col items-center justify-center pt-4 py-8 bg-gradient-login h-[50vh] 
      md:w-[50%] md:h-screen md:order-2 md:rounded-bl-[120px]"
      >
        <div className="flex items-center justify-center">
          <img src={SymbolImage} alt="symbol-image" className="h-20 w-full" />
        </div>
        <h1 className="font-bold text-4xl text-gray-100">EnPals</h1>
      </div>
      {/* login */}
      <form className="flex flex-col justify-center items-center m-8 md:w-[50%]">
        <div className="px-8 text-center mb-8 md:w-[60%] md:text-start">
          <h2 className="text-2xl font-semibold">Login</h2>
          <p className="text-sm">Login with Netbank!</p>
        </div>
        <div className="flex flex-col gap-4">
          <button
            type="submit"
            className="border rounded-xl py-2 px-4 bg-[#82AA57] text-sm text-gray-100 font-semibold"
          >
            Sign In
          </button>
          <button
            type="submit"
            className="border rounded-xl py-2 px-4 bg-[#82AA57] text-sm text-gray-100 font-semibold"
          >
            Demo User
          </button>
        </div>
      </form>
    </div>
  );
};

export default login;
