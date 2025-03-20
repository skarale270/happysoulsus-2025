import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6 flex items-center mb-4">
      <div className="flex items-center">
        <img
          src="src/assets/hpLogo.jpg"
          alt="Logo"
          className="h-10 w-10 mr-4"
        />
        <span className="text-lg font-semibold text-white">Happysoulsus</span>
      </div>
    </header>
  );
};

export default Header;
