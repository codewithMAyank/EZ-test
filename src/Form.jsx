import axios from "axios";
import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState({
    Email: "",
  });

  function changeHandler(e) {
    setEmail((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!email.Email) {
      alert("Enter Valid Email...");
      return;
    }

    const api = "https://test.ezworks.ai/api ";

    await axios
      .post(api, { email: email.Email })
      .then((res) => {
        setEmail({ Email: `${res.data.message}` });
      })
      .catch((err) => {
        if (err.response && err.response.status === 422) {
          console.log(err);
          setEmail({ Email: "response code 422" });
        }
      });
  };

  return (
    <div className="my-5 md:my-0 text-center sm:flex lg:block xl:flex items-center space-x-5 space-y-2 sm:space-y-0 lg:space-y-2 xl:space-y-0 w-full">
      <input
        type="email"
        name="Email"
        placeholder="Email Address"
        value={email.Email}
        onChange={changeHandler}
        className="text-xl lg:text-2xl border-[1px] lg:border-2 border-gray-500 outline-none px-4 py-2 rounded-lg w-full"
      />
      <button
        type="submit"
        onClick={submitHandler}
        className="bg-contact text-white px-6 py-2 rounded-lg text-xl lg:text-3xl text-nowrap"
      >
        Contact Me
      </button>
    </div>
  );
};

export default Form;
