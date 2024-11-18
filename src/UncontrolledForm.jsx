import React, { useRef } from 'react';

function UncontrolledForm() {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Form submitted with data:\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>
          Name:
          <input
            type="text"
            ref={nameRef}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
            required
          />
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default UncontrolledForm;
