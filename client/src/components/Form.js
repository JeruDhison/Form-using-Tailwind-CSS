import React, { useState, useEffect } from "react";

const Form = () => {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
    alert("Successfully Validated");
  };

  const validationform = (value) => {
    const errors = {};

    return errors;
  };
  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-black rounded-lg shadow-md">
      <h2 className="text-3xl text-center text-green-600 font-bold mb-6">
        Student Details
      </h2>
      <form onSubmit={handlesubmit}>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-green-500"
            placeholder="Name here"
            name="name"
            value={formvalue.name}
            onChange={handlevalidation}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-green-500"
            placeholder="abcd@gmail.com"
            name="email"
            value={formvalue.email}
            onChange={handlevalidation}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-semibold mb-2">
            Message
          </label>
          <textarea
            rows="4"
            className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:outline-none focus:border-green-500"
            placeholder="Your thoughts here.."
            name="message"
            value={formvalue.message}
            onChange={handlevalidation}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-4 py-2 ml-40 rounded-lg hover:green-600 focus:outline-white"
          >
            Submit
          </button>
        </div>
      </form>

      <div>
        <a href="/">
          <button className="bg-green-500 text-white font-semibold px-4 py-2 mt-10 ml-40 rounded-lg hover:green-600 focus:outline-white">
            Back
          </button>
        </a>
      </div>
    </div>
  );
};

export default Form;
