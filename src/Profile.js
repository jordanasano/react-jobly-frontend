import { useState } from "react";
import { useContext } from "react";
import userContext from "./userContext";
import "./Profile.css";

/** To update a user.
 *
 *  Props:
 *      - updateUser()
 *
 *  State:
 *    - formData, messages
 *
 *  Context:
 *    - user
 *        (i.e. { username, firstName, lastName, email, isAdmin })
 *
 *  RouteList -> Logout
 */
function Profile({ updateUser }) {
  const [formData, setFormData] = useState({});
  const [messages, setMessages] = useState(null);
  const user = useContext(userContext);

  // Updates state of form data through any change in the input fields
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
    console.log("formData in handleSubmit=", formData);
    try {
      await updateUser(formData);
      setMessages(['Successfully updated user!']);
    } catch (err) {
      console.log("messages are =", err);
      setMessages(err);
    }
  }
  console.log(messages);
  return (
    <form onSubmit={handleSubmit} className="Profile-container">
      {messages && (
        messages.map((err, idx) =>
          <p key={idx} className="Profile-message" >
            {
              err.startsWith('instance.')
                ? err.slice(9)
                : err
            }
          </p>)
      )}
      <label htmlFor="username"></label>
      <input
        id="username"
        name="username"
        disabled={true}
        value={user.username} />
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
      <button>Update Account!</button>
    </form>
  );

}

export default Profile;
