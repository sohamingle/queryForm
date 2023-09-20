import React from 'react';

const CustomInput = ({ id, value, onChange, placeholder, disabled, handleResolve }) => {
  return (
    <td className='border-2 border-black'>
      <input
        id={id}
        name="name"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input border-black mr-4"
        required
      />
      <button
        className="btn btn-primary"
        id={id}
        disabled={disabled || value === ""}
        onClick={() => handleResolve(id)}
      >
        Resolve
      </button>
    </td>
  );
};

export default CustomInput;
