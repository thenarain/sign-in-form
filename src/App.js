import { useState } from "react";
import "./App.css";
import signNameImage from "./image-container.png";

const App = (event) => {
  const [newName, setNewName] = useState([]);
  const addForm = () => {
    console.log("button clicked", event.target);
    event.preventDefault();
  };
  const handlenameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  };
  return (
    <div className="App">
      <div className="signin-container">
        <h2>WELCOME</h2>
        <form className="form-container" onSubmit={addForm}>
          <input
            type="text"
            name="username"
            value={newName}
            onChange={handlenameChange}
            className="input"
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            className="input"
          />
          <br />
          <div className="remember-container">
            <div className="checkbox">
              <input
                type="checkbox"
                name="remember"
                value="remember"
              />
              <label for="remember">Remember me</label>
            </div>
            <a href="#" className="forgot">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="button">
            submit
          </button>
        </form>
      </div>
      <div className="image-container">
        <img src={signNameImage} alt="side" />
      </div>
    </div>
  );
};
export default App;
