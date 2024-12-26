"use client";

import { useState } from "react";
import Question from "./components/Question/Question";
import Summary from "./components/Summary/Summary";
import Title from "./components/Title/Title";

import foto1825 from "../../public/questImgs/idade/latam 18-25.png";
import foto2635 from "../../public/questImgs/idade/start_age_branches(2).png";
import foto3645 from "../../public/questImgs/idade/start_age_latam,36-45.png";
import foto46 from "../../public/questImgs/idade/start_age_branches(4).png";
import ganha from "../../public/questImgs/objtvo/goal_conf.png";
import loser from "../../public/questImgs/objtvo/lose.png";
import leve from "../../public/questImgs/estilo de treino/Home(1).png";
import moderado from "../../public/questImgs/estilo de treino/Gym(1).png";
import itenso from "../../public/questImgs/estilo de treino/mix(1).png";

interface Answers {
  idade?: string;
  objetivo?: string;
  jaTreina?: string;
  diasTreino?: string;
  intensidade?: string;
  tipoTreino?: string;
  tempoDisponivel?: string;
  equipamentos?: string;
  experiencia?: string;
  acompanhamento?: string;
  lesoes?: string;
  alimentacao?: string;
  motivacao?: string;
}

export default function Home() {
  const totalSteps = 12;
  const [step, setStep] = useState<number>(1);
  const [answers, setAnswers] = useState<Answers>({});

  const handleAnswer = (question: keyof Answers, answer: string) => {
    setAnswers({ ...answers, [question]: answer });
    setStep((prevStep) => prevStep + 1);
  };

  const progressPercentage = ((step - 1) / totalSteps) * 100;

  return (
    <div style={{ backgroundColor: "rgb(29,29,29)" }} className="min-h-screen  text-white flex flex-col items-center">
      {/* Barra de Progresso */}
      <div className="w-full">
        <div className="w-full bg-gray-800 h-2 rounded-full">
          <div
            className="h-2 rounded-full transition-all"
            style={{ width: `${progressPercentage}%`, backgroundColor: "#00FF00" }}
          ></div>
        </div>
        <p className="text-center mt-2 text-sm text-green-500">
          {step - 1}/{totalSteps} Etapas concluídas
        </p>
      </div>

      <Title none={step === 1 ? "block" : "none"} />

      <div className="mt-8">
        {step === 1 && (
          <Question
            question="Qual é sua idade?"
            options={[
              { label: "18-25", imageSrc: foto1825.src },
              { label: "26-35", imageSrc: foto2635.src },
              { label: "36-45", imageSrc: foto3645.src },
              { label: "46+", imageSrc: foto46.src },
            ]}
            onAnswer={(answer) => handleAnswer("idade", answer)}
          />
        )}
        {step === 2 && (
          <Question
            question="Qual é o seu objetivo físico?"
            options={[
              { label: "Ganho de massa", imageSrc: ganha.src },
              { label: "Perder peso", imageSrc: loser.src },
            ]}
            onAnswer={(answer) => handleAnswer("objetivo", answer)}
          />
        )}
        {step === 3 && (
          <Question
            question="Qual a intensidade do treino que você deseja?"
            options={[
              { label: "Leve", imageSrc: leve.src },
              { label: "Moderada", imageSrc: moderado.src },
              { label: "Intensa", imageSrc: itenso.src },
            ]}
            onAnswer={(answer) => handleAnswer("intensidade", answer)}
          />
        )}
        {step === 4 && (
          <Question
            question="Quantos dias por semana você gostaria de treinar?"
            options={[
              { label: "3 dias" },
              { label: "4 dias" },
              { label: "5 dias" },
              { label: "6 dias" },
              { label: "Todos os dias" },
            ]}
            onAnswer={(answer) => handleAnswer("diasTreino", answer)}
          />
        )}
        {step === 5 && (
          <Question
            question="Você já treina?"
            options={[
              { label: "Sim" },
              { label: "Não" },
            ]}
            onAnswer={(answer) => handleAnswer("jaTreina", answer)}
          />
        )}
        {step === 6 && (
          <Question
            question="Qual tipo de treino você prefere?"
            options={[
              { label: "Funcional" },
              { label: "Musculação" },
              { label: "Cardio" },
            ]}
            onAnswer={(answer) => handleAnswer("tipoTreino", answer)}
          />
        )}
        {step === 7 && (
          <Question
            question="Quanto tempo você tem disponível para treinar?"
            options={[
              { label: "30 minutos" },
              { label: "1 hora" },
              { label: "Mais de 1 hora" },
            ]}
            onAnswer={(answer) => handleAnswer("tempoDisponivel", answer)}
          />
        )}
        {step === 8 && (
          <Question
            question="Você tem acesso a equipamentos de treino?"
            options={[
              { label: "Sim" },
              { label: "Não" },
            ]}
            onAnswer={(answer) => handleAnswer("equipamentos", answer)}
          />
        )}
        {step === 9 && (
          <Question
            question="Qual é o seu nível de experiência com treinos?"
            options={[
              { label: "Iniciante" },
              { label: "Intermediário" },
              { label: "Avançado" },
            ]}
            onAnswer={(answer) => handleAnswer("experiencia", answer)}
          />
        )}
        {step === 10 && (
          <Question
            question="Você possui alguma lesão ou limitação física?"
            options={[
              { label: "Joelho" },
              { label: "Cotovelo" },
              { label: "Ombro" },
              { label: "Punho" },
              { label: "Tornozelo" },
              { label: "Outros" },
              { label: "Não" },
            ]}
            onAnswer={(answer) => handleAnswer("lesoes", answer)}
          />
        )}
        {step === 11 && (
          <Question
            question="Como está sua alimentação atualmente?"
            options={[
              { label: "Muito boa" },
              { label: "Regular" },
              { label: "Precisa melhorar" },
            ]}
            onAnswer={(answer) => handleAnswer("alimentacao", answer)}
          />
        )}
        {step === 12 && (
          <Question
            question="O que mais te motiva a treinar?"
            options={[
              { label: "Melhorar saúde" },
              { label: "Estética" },
              { label: "Desafios pessoais" },
            ]}
            onAnswer={(answer) => handleAnswer("motivacao", answer)}
          />
        )}
        {step > totalSteps && <Summary answers={answers} />}
      </div>
    </div>
  );
}
