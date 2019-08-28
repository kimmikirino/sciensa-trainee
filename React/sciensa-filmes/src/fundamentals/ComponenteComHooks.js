import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [initialText, setInitialText] = useState("Fala doido! ");
  const [crazyObject, setCrazyObject] = useState({ attr1: "Parabéns" });

  useEffect(() => {
    console.log("passou no useEffect");
    document.title = `You clicked ${count} times`;
  });

  useEffect(() => {
    console.log("Aqui monta");

    return function cleanup() {
      console.log("aqui desmonta");
    };
  }, []);

  return (
    <div>
      <h1>{crazyObject.attr1}</h1>
      <p>
        {initialText}Você clicou {count} times
      </p>
      <button onClick={() => setCount(count + 1)}>Clica aqui</button>
    </div>
  );
};
