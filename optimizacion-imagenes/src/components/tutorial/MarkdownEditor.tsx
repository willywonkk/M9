import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
const MarkdownEditor = () => {
    const [text, setText] = useState<string>(() => {
        return localStorage.getItem("tutorialContent") || "Escribe aquí tus notas...";
 });
useEffect(() => {
    localStorage.setItem("tutorialContent", text);
}, [text]);
return (
    <div className="mt-4">
        <textarea
            className="w-full h-40 border p-2"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <h3 className="text-lg font-bold mt-4">Vista Previa</h3>
        <div className="p-4 border bg-gray-100">
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    </div>
);
};
export default MarkdownEditor;