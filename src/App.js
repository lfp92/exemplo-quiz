import React, { useState } from "react";
import Pergunta from "./components/Pergunta";
import initialState from "./BasePerguntas";
import Header from "./components/Header";

const retornaTextoAcertos = perguntas => {
  const arrayAcertou = perguntas.map(pergunta => (pergunta.acertou ? 1 : 0));
  const soma = arrayAcertou.reduce((anterior, atual) => anterior + atual);
  const textoRetorno = `${soma} / ${perguntas.length}`;
  return textoRetorno;
};

const App = () => {
  const [perguntas, setPerguntas] = useState(initialState());
  const refazerQuiz = () => {
    setPerguntas(initialState());
  };

  const handleClick = (idPergunta, idResposta) => event => {
    const novasPerguntas = [...perguntas];
    novasPerguntas[idPergunta].respondida = true;
    if (novasPerguntas[idPergunta].opcaoCorreta === idResposta) {
      novasPerguntas[idPergunta].acertou = true;
    } else {
      novasPerguntas[idPergunta].acertou = false;
    }
    setPerguntas(novasPerguntas);
  };

  return (
    <div>
      <Header title="Quiz" texto={retornaTextoAcertos(perguntas)} />
      <header>Respostas corretas: </header>
      <main>
        {perguntas.map((pergunta, index) => (
          <Pergunta
            handleClick={handleClick}
            enunciado={pergunta.enunciado}
            respostas={pergunta.respostas}
            idPergunta={index}
            acertou={pergunta.acertou}
            respondida={pergunta.respondida}
            key={index}
          />
        ))}
        <button data-test="refazer" onClick={() => refazerQuiz()}>Refazer quiz</button>
      </main>
    </div>
  );
};

export default App;
