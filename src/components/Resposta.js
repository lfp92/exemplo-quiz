import React from "react";

const Resposta = ({ texto, handleClick, index, idPergunta }) => {
  return <li data-test="opcao" onClick={handleClick(idPergunta, index)}>{texto}</li>;
};

export default Resposta;
