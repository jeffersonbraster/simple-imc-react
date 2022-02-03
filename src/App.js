import { useState } from "react";
import "./app.css";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");

  const [message, setMessage] = useState("");

  function calcularImc() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      setMessage("Está abaixo do peso, seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 18.6 && imc < 24.9) {
      setMessage("Está no peso ideal, seu IMC é: " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc < 34.9) {
      setMessage("Está levemente acima do peso, seu IMC é: " + imc.toFixed(2));
    } else if (imc > 34.9) {
      setMessage(
        "Cuidado Obesidade procure um nutricionista, seu IMC é: " +
          imc.toFixed(2)
      );
    }
  }

  return (
    <div className="app">
      <h1>Calculadora IMC</h1>
      <span>Vamos calcular seu IMC hoje?</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em (kg) Ex: 90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) Ex: 180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button type="submit" onClick={calcularImc}>
          Calcular
        </button>
      </div>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
