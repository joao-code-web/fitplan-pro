import "./Summary.css";

interface SummaryProps {
  answers: {
    idade?: string;
    objetivo?: string;
    jaTreina?: string;
    diasTreino?: string;
  };
}

export default function Summary({ answers }: SummaryProps) {
  return (
    <div className="summary-container text-white p-6 rounded-lg">
      <h2 className="text-3xl font-semibold mb-6 text-green-400">Resumo do Questionário</h2>
      <ul className="summary-list text-lg">
        <li className="summary-item">Idade: <span>{answers.idade}</span></li>
        <li className="summary-item">Objetivo: <span>{answers.objetivo}</span></li>
        <li className="summary-item">Já treina: <span>{answers.jaTreina}</span></li>
        <li className="summary-item">Dias por semana: <span>{answers.diasTreino}</span></li>
      </ul>
      <button
        className="submit-button mt-6 bg-green-700 hover:bg-green-800 py-3 px-6 rounded-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-2xl"
        onClick={() => alert("Questionário enviado!")}
      >
        Enviar Respostas
      </button>
    </div>
  );
}
