import React from "react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  return (
    <button
      onClick={() => {}}
      className="flex justify-between text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      <div
        children="Logout"
        className="text-left rounded-md px-3 py-2 text-sm font-medium"
      />
      <FiLogOut className="mt-2" />
    </button>
  );
};

export default LogoutButton;
