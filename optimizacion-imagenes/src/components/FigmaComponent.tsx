const FigmaComponent = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
      <h2 className="text-2xl font-bold">Diseño Exportado de Figma</h2>
      <p className="text-gray-600">Este componente fue diseñado en Figma y convertido en React.</p>
      <div className="flex flex-col bg-[#FFFFFF]">
        <div className="flex flex-col self-stretch h-[978px]">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/UqlOsMSKAm/e0fl3at9.png"}
            className="self-stretch h-[978px] object-fill"
          />
        </div>
      </div>
    </div>
  );
};
export default FigmaComponent;