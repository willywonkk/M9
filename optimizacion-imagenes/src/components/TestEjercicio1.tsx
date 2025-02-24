import { useState } from "react";

const questions = [
  {
    question: "¿Cuál de estos formatos soporta transparencia?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Qué formato es más eficiente en la web?",
    options: ["PNG", "JPEG", "WebP", "AVIF"],
    answer: "AVIF",
  },
  {
    question: "¿Qué formato es mejor para fotografías con muchos detalles?",
    options: ["PNG", "JPEG", "GIF", "SVG"],
    answer: "JPEG",
  },
  {
    question: "¿Qué formato es ideal para gráficos e iconos escalables?",
    options: ["PNG", "JPEG", "WebP", "SVG"],
    answer: "SVG",
  },
  {
    question: "¿Qué formato ofrece la mejor compresión sin pérdida?",
    options: ["JPEG", "PNG", "WebP", "AVIF"],
    answer: "PNG",
  },
  {
    question: "¿Cuál es el formato más nuevo y avanzado para imágenes web?",
    options: ["WebP", "AVIF", "JPEG XL", "HEIF"],
    answer: "AVIF",
  },
  {
    question: "¿Qué formato es mejor para animaciones simples?",
    options: ["PNG", "JPEG", "GIF", "SVG"],
    answer: "GIF",
  },
  {
    question: "¿Qué formato ofrece el mejor equilibrio entre calidad y tamaño para fotografías?",
    options: ["PNG", "JPEG", "WebP", "AVIF"],
    answer: "WebP",
  },
  {
    question: "¿Qué formato es compatible con la mayoría de los navegadores antiguos?",
    options: ["WebP", "AVIF", "JPEG", "HEIF"],
    answer: "JPEG",
  },
  {
    question: "¿Qué formato es mejor para imágenes con pocos colores y bordes definidos?",
    options: ["JPEG", "PNG", "GIF", "WebP"],
    answer: "PNG",
  },
];

const TestEjercicio1 = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>(Array(questions.length).fill(""));

  const handleSelect = (index: number, option: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = option;
    setSelectedAnswers(newAnswers);
  };

  const checkAnswers = () => {
    const correct = selectedAnswers.filter((ans, i) => ans === questions[i].answer).length;
    alert(`Has respondido correctamente ${correct} de ${questions.length}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Test de Conocimientos</h2>
      {questions.map((q, i) => (
        <div key={i} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button
              key={opt}
              className={`mr-2 px-4 py-2 mt-2 rounded ${
                selectedAnswers[i] === opt ? "bg-blue-500 text-white" : "bg-gray-300"
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

export default TestEjercicio1;
