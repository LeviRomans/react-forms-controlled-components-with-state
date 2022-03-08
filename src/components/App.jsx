import React, { useState } from "react";

function App() {
  const [fName, setfName] = useState("");

  function handleChange(e) {
    setfName(e.target.value);
    setIsSubmitted(false);
    console.log(fName);
  }

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit() {
    console.log("Submit Triggered");
    setIsSubmitted(true);
    console.log("isSubmitted: " + isSubmitted);
  }

  return (
    <div className="container">
      <h1>Hello {isSubmitted ? fName : ""}</h1>
      <input
        onChange={handleChange}
        value={fName}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
