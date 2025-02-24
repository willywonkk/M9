import ImageOptimizer from "./ImageOptimizer"
import Test1 from "./TestEjercicio1"

const Ejercicio1 = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 1: Optimización de Imágenes</h1>
      <p className="mb-4">
        Sube una imagen y observa cómo se vería convertida a diferentes formatos: JPEG, PNG, WebP y AVIF. Compara los
        tamaños de archivo estimados para cada formato.
      </p>
      <div className="p-6 w-[500px] mx-auto">
        <ImageOptimizer />
      </div>
      <Test1 />
    </div>
  )
}

export default Ejercicio1