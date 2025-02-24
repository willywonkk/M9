import { useState } from "react";
const questions = [
    {
        "question": "¿Qué formato es ideal para exportar iconos desde Figma?",
        "options": ["JPEG", "PNG", "SVG", "WebP"],
        "answer": "SVG"
      },
      {
        "question": "¿Qué plugin de Figma permite exportar código JSX?",
        "options": ["Tailwind CSS for Figma", "Anima for Figma", "SVG Export", "Figma Mirror"],
        "answer": "Anima for Figma"
      },
      {
        "question": "¿Cuál de estos formatos es mejor para exportar imágenes de Figma a la web?",
        "options": ["JPEG", "PNG", "WebP", "AVIF"],
        "answer": "WebP"
      },
      {
        "question": "¿Qué ventaja tiene exportar gráficos como SVG desde Figma?",
        "options": [
          "Permiten escalado sin perder calidad",
          "Reducen la calidad de la imagen",
          "Solo funcionan en Figma",
          "No se pueden usar en React"
        ],
        "answer": "Permiten escalado sin perder calidad"
      },
      {
        "question": "¿Cómo se integran imágenes exportadas de Figma en React?",
        "options": [
          "Como componentes JSX o imágenes optimizadas en WebP",
          "Solo se pueden usar como PNG",
          "Deben convertirse a MP4",
          "No se pueden usar en React"
        ],
        "answer": "Como componentes JSX o imágenes optimizadas en WebP"
      }
];
const TestEjercicio4 = () => {
    const [selectedAnswers, setSelectedAnswers] =
        useState<string[]>(Array(questions.length).fill(""));
    const handleSelect = (index: number, option: string) => {
        const newAnswers = [...selectedAnswers];
        newAnswers[index] = option;
        setSelectedAnswers(newAnswers);
    };
    const checkAnswers = () => {
        const correct = selectedAnswers.filter((ans, i) => ans ===
            questions[i].answer).length;
        alert(`Has respondido correctamente ${correct} de 
${questions.length}`);
    };
    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Test sobre Figma y
                React</h2>
            {questions.map((q, i) => (
                <div key={i} className="mb-4">
                    <p className="font-semibold">{q.question}</p>
                    {q.options.map((opt) => (
                        <button
                            key={opt}
                            className={`mr-2 px-4 py-2 mt-2 rounded ${selectedAnswers[i] === opt ? "bg-blue-500 text-white"
                                : "bg-gray-300"
                                }`}
                            onClick={() => handleSelect(i, opt)}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            ))}
            <button onClick={checkAnswers} className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
                Verificar respuestas
            </button>
        </div>
    );
};
export default TestEjercicio4;
