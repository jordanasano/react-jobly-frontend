import { useState } from "react";

/** Logs in a registered user
 *
 *  props: login()
 *
 *  state: formData
 *
 *  RouteList -> Login */
 function Login({ login }) {
  const [formData, setFormData] = useState({});

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(st => ({
      ...st,
      [name]: value,
    }));
  }

  //TODO: show error potentially... make async
  // Stops the page from reloading and invokes login function
  // with user input
  async function handleSubmit(evt) {
    evt.preventDefault();
    await login(formData);
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
      <button>Login</button>
    </form>
  );

}

export default Login;
