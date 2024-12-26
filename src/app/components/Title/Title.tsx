interface TitleProps {
    none: string;
}

export default function Title({ none }: TitleProps) {
    return (
        <div style={{ display: none }}>
            <h1 className="text-3xl font-bold mt-8 text-center">
                Plano de treino personalizado
            </h1>
            <p className="text-lg mt-4 text-center">
                Questionário rápido para encontramos sua melhor planilha
            </p>
        </div>
    )
}