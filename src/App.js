
import React, { useState } from 'react'
import './App.css';

function App() {

  const [password, passwordSet] = useState("");

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const specialChars = "!#$%^*-+=";
  const passwordLength = 12;

const generatePassword = () => {

  let protoPassword = "";

  protoPassword = protoPassword + lowerCase;
  protoPassword = protoPassword + upperCase;
  protoPassword = protoPassword + numbers;
  protoPassword = protoPassword + specialChars;

  passwordSet(createPassword(protoPassword));

}

  const createPassword = (protoPassword) => {
    const protoPasswordLength = protoPassword.length;

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const charIndex = Math.round(Math.random() * protoPasswordLength);
      password = password + protoPassword.charAt(charIndex);
    }

    return password;

  }

  return (
    <div className="App">
      <div className="container">
        <div className="password-generator">
          <h1 className="App-header">React Random Password Generator</h1>
          <div className="display-password">
            <h2>{password}</h2>
          </div>
          <button onClick={generatePassword} className="generate-button">Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
