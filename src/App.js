import React, { useState } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./App.css";

function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  return (
    <div className="formDiv">
      <div className="creditCard">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
      </div>
      <form>
        <div>
          <input
            type="tel"
            name="number"
            style={{ width: "90%" }}
            placeholder="Card Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            style={{ width: "90%" }}
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <input
            type="text"
            name="Expiry"
            style={{ width: "41%" }}
            placeholder="MM/YY Expiry"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <input
            type="tel"
            style={{ width: "41%" }}
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
        </div>
        <div>
          <input type="submit" value="Validate"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
