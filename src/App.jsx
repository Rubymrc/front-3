import React from "react";
import Card from "./Card";

function App() {
  //Aqui deberias agregar los estados y los handlers para los inputs
  const [input1, setInput1] = React.useState("");
  const [input2, setInput2] = React.useState("");
  const [error, setError] = React.useState(false);
  const [info, setInfo] = React.useState(null);

  const handleInput1 = (event) => setInput1(event.target.value);
  const handleInput2 = (event) => setInput2(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (input1.length < 3 || input1.startsWith(" ")) {
      setError(true);
      return;
    }

    if (input2.length < 6) {
      setError(true);
      return;
    }

    // Todo está correcto
    setInfo({ input1, input2 });
    setError(false);
    setInput1("");
    setInput2("");
  };

  return (
    <div className="App">
      <h1>Elige un color</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="input1"
          value={input1}
          onChange={handleInput1}
          placeholder="Ingresa tu nombre"
        />
        <input
          name="input2"
          value={input2}
          onChange={handleInput2}
          placeholder="Ingresa tu color favorito (formato HEX)"
        />
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="inputError">Por favor chequea que la información sea correcta</p>}
      {!error && info && <Card info={info} />}
    </div>
  );
}

export default App;
