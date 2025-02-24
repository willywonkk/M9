import { useState } from "react";
const questions = [
    {
        "question": "¿Cuál es el formato más eficiente para imágenes en la web?",
        "options": ["JPEG", "PNG", "WebP", "AVIF"],
        "answer": "AVIF"
    },
    {
        "question": "¿Qué herramienta permite diseñar interfaces web?",
        "options": ["Photoshop", "Figma", "GIMP", "Illustrator"],
        "answer": "Figma"
    },
    {
        "question": "¿Qué técnica permite retrasar la carga de imágenes hasta que sean visibles?",
        "options": ["Preloading", "Lazy Loading", "Caching", "Compression"],
        "answer": "Lazy Loading"
    },
    {
        "question": "¿Qué API se usa en JavaScript para detectar si un elemento es visible en la pantalla?",
        "options": ["Canvas API", "Fetch API", "Intersection Observer", "WebGL"],
        "answer": "Intersection Observer"
    },
    {
        "question": "¿Qué formato de imagen es más adecuado para gráficos vectoriales?",
        "options": ["JPEG", "PNG", "SVG", "WebP"],
        "answer": "SVG"
    },
    {
        "question": "¿Cuál de estos métodos en Canvas API se usa para obtener datos de píxeles de una imagen?",
        "options": ["getContext()", "getImageData()", "drawImage()", "fillRect()"],
        "answer": "getImageData()"
    },
    {
        "question": "¿Qué beneficio tiene exportar imágenes desde Figma en formato WebP?",
        "options": [
            "Menor peso y buena calidad",
            "Mejor compatibilidad con todos los navegadores",
            "No permite compresión",
            "Carga más lenta en la web"
        ],
        "answer": "Menor peso y buena calidad"
    },
    {
        "question": "¿Qué atributo HTML permite cargar imágenes de forma diferida?",
        "options": ["src", "alt", "loading", "async"],
        "answer": "loading"
    },
    {
        "question": "¿Cuál es una ventaja del uso de SVG en interfaces web?",
        "options": [
            "Soporta animaciones y escalado sin perder calidad",
            "Tiene mayor peso que un PNG",
            "No funciona en navegadores modernos",
            "Es un formato con compresión con pérdida"
        ],
        "answer": "Soporta animaciones y escalado sin perder calidad"
    },
    {
        "question": "¿Qué método en JavaScript se usa para convertir una imagen a escala de grises en Canvas?",
        "options": [
            "Multiplicar los valores de color por 0",
            "Promediar los valores de R, G y B de cada píxel",
            "Reducir la saturación al 0%",
            "Invertir los valores de color"
        ],
        "answer": "Promediar los valores de R, G y B de cada píxel"
    }
];
const Test = () => {
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
            <h2 className="text-2xl font-bold mb-4">Test Final</h2>
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
            ))
            }
            <button onClick={checkAnswers} className="bg-green-500 text-white px-6 py-2 mt-4 rounded">
                Verificar respuestas
            </button>
        </div >
    );
};
export default Test;