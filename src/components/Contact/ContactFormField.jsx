import React from "react";

function ContactFormField({ error, value, name, setField, setError, type, placeholder }) {
  const isError = error[name] !== null && error[name] !== "";

  const handleChange = (e) => {
    if (isError) {
      setError({
        ...error,
        [name]: ""
      });
    }
    setField(e.target.value);
  };

  return (
    <div className="my-4">
      <label htmlFor={name} className="text-white block mb-1">
        {name === "message" ? "Message" : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          value={value}
          rows={10}
          className={`p-2 w-full bg-transparent border-2 border-gray-500 focus:border-white focus:shadow-outline ${
            isError ? "border-pink-500 text-pink-600" : ""
          } rounded-md text-white focus:outline-none`}
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={(e) => handleChange(e)}
          value={value}
          className={`p-2 w-full bg-transparent border-2 border-gray-500 focus:border-white focus:shadow-outline ${
            isError ? "border-pink-500 text-pink-600" : ""
          } rounded-md text-white focus:outline-none`}
        />
      )}
      {isError && (
        <p id={`${name}-error`} className="text-red-500 text-sm mt-1" aria-live="polite">
          {error[name]}
        </p>
      )}
    </div>
  );
}

export default ContactFormField;
