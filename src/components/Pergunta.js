import React from "react";
import Resposta from "./Resposta";

const Pergunta = ({
  enunciado,
  respostas,
  handleClick,
  idPergunta,
  respondida,
  acertou
}) => {
  const style = {
    backgroundColor: "white"
  };

  if (respondida) {
    handleClick = () => null;
    style.backgroundColor = "red";
    if (acertou) style.backgroundColor = "green";
  } else {
    style.backgroundColor = "white";
  }

  return (
    <section
      data-test="pergunta"
      data-resposta={respondida ? (acertou ? "correta" : "errada") : null}
      style={style}
    >
      <h2>{enunciado}</h2>
      <ul>
        {respostas.map((resposta, index) => (
          <Resposta
            texto={resposta.texto}
            key={index}
            handleClick={handleClick}
            index={index}
            idPergunta={idPergunta}
          />
        ))}
      </ul>
    </section>
  );
};

export default Pergunta;
