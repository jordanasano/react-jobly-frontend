import { useState } from "react";
import "./Login.css";

/** Logs in a registered user
 *
 *  props: login()
 *
 *  state: formData, errors
 *
 *  RouteList -> Login */
function Login({ logIn }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState(null);

  // Updates state of form data through any change in the input fields
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(st => ({
      ...st,
      [name]: value,
    }));
  }

  // Stops the page from reloading and invokes login function
  // with user input
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await logIn(formData);
    } catch (err) {
      console.log('errors are ', err)
      setErrors(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='Login-container'>
      {errors && (
        errors.map((err, idx) =>
          <p key={idx} className='Login-error'>{err}</p>)
      )}
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        onChange={handleChange}
        placeholder="Enter username..." />
      <label htmlFor="password"></label>
      <input
        id="password"
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );

}

export default Login;
