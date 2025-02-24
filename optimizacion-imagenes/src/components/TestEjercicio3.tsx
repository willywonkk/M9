import { useState } from "react";
const questions = [
    {
        "question": "¿Qué API de JavaScript permite manipular imágenes en un canvas?",
        "options": ["WebGL", "Canvas API", "Intersection Observer", "Fetch API"],
        "answer": "Canvas API"
    },
    {
        "question": "¿Cuál de estos métodos obtiene los datos de píxeles de una imagen en Canvas?",
        "options": ["getContext()", "getImageData()", "setTimeout()", "drawImage()"],
        "answer": "getImageData()"
    },
    {
        "question": "¿Qué propiedad de Canvas se usa para cambiar colores de una imagen?",
        "options": ["data[] en getImageData()", "fillStyle", "strokeStyle", "drawImage()"],
        "answer": "data[] en getImageData()"
    },
    {
        "question": "¿Cómo se convierte una imagen a escala de grises en Canvas?",
        "options": [
            "Promediando los valores de R, G y B de cada píxel",
            "Multiplicando cada color por 0",
            "Usando un filtro CSS",
            "No es posible en Canvas"
        ],
        "answer": "Promediando los valores de R, G y B de cada píxel"
    },
    {
        "question": "¿Cómo se invierten los colores de una imagen en Canvas?",
        "options": [
            "Restando cada valor de R, G y B a 255",
            "Multiplicando cada píxel por -1",
            "Aplicando el filtro 'invert()' de CSS",
            "No se pueden invertir colores en Canvas"
        ],
        "answer": "Restando cada valor de R, G y B a 255"
    }
];
const TestEjercicio3 = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test de Manipulación de
                Imágenes</h2>
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
export default TestEjercicio3;
