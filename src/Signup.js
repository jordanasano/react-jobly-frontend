import { useState } from "react";


/** Registers a new user
 *
 *  props: signup()
 *
 *  state: formData
 *
 *  RouteList -> Signup */

 function Signup({ signUp }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(st => ({
      ...st,
      [name]: value,
    }));
  }


  // Stops the page from reloading and invokes signup function
  // with user input
  async function handleSubmit(evt) {
    evt.preventDefault();
    await signUp(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="Enter username..." />
      <label htmlFor="password"></label>
      <input
        id="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..." />
      <label htmlFor="firstName"></label>
      <input
        id="firstName"
        name="firstName"
        onChange={handleChange}
        placeholder="Enter first name..." />
      <label htmlFor="lastName"></label>
      <input
        id="lastName"
        name="lastName"
        onChange={handleChange}
        placeholder="Enter last name..." />
      <label htmlFor="email"></label>
      <input
        id="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter email..." />
      <button>Create Account!</button>
    </form>
  );

}

export default Signup;
