import React from "react";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import FileUpload from "../../components/Fileupload";

const CollegeRegister = () => {
  const [product, setProduct] = useState({
    productId: 0,
    productCategory: "",
  });
  const [state, setStateName] = useState({
    stateId: 0,
    stateName: "",
  });
  return (
    <div className="h-[calc(100vh-64px)]  flex justify-center items-center">
      <div className="mx-auto bg-gray-400 p-4 shadow-md shadow-slate-600 rounded-md">
        <h1 className="text-center text-lg font-bold m-2">
          College Registrations
        </h1>
        <form className="w-auto flex flex-col">
          <div className="flex flex-row">
            <div className="flex flex-col justify-between space-y-2">
              <input
                type="text"
                className="text-md font-semibold rounded-md h-8 px-2 w-96 focus:outline-none"
                placeholder="College Name"
              />
              <div className="flex flex-row gap-2">
                <select
                  className="w-full text-md font-semibold rounded-md text-gray-400 h-8 px-2 focus:outline-none"
                  value={state.StateName}
                  onChange={(evt) =>
                    setStateName({
                      ...state,
                      StateName: evt.target.value,
                    })
                  }
                >
                  <option value="" disabled selected hidden>
                    State
                  </option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                  <option>Mobile</option>
                </select>
                <select
                  className="w-full text-md font-semibold rounded-md text-gray-400 h-8 px-2 focus:outline-none"
                  value={product.productCategory}
                  onChange={(evt) =>
                    setProduct({
                      ...product,
                      productCategory: evt.target.value,
                    })
                  }
                >
                  <option value="" disabled selected hidden>
                    Country
                  </option>
                  <option>Furniture</option>
                  <option>Electronics</option>
                  <option>Mobile</option>
                </select>
              </div>
              <input
                type="text"
                className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
                placeholder="Pincode"
              />
              <input
                type="mail"
                className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
                placeholder="Email"
              />
              <input
                type="password"
                className="text-md font-semibold rounded-md h-8 px-2 focus:outline-none"
                placeholder="Password"
              />
            </div>
            <FileUpload />
          </div>
          <button
            onClick={() => {}}
            type="button"
            className="bg-gray-300 h-8 rounded-md mt-2"
            children="Signup"
          />
          <p>
            Already have an account??{" "}
            <NavLink to="/login" className="text-blue-600">
              Login
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default CollegeRegister;
