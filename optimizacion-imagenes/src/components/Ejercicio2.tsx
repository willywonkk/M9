import LazyImage from "./LazyImage"
import Test2 from "./TestEjercicio2"

const Ejercicio2 = () => {
  const images = [
    "https://www.shutterstock.com/image-vector/pixel-art-illustration-camel-desert-600nw-2452011749.jpg",
    "https://www.shutterstock.com/image-vector/detective-dog-pixel-art-meme-600nw-2578493181.jpg",
    "https://www.shutterstock.com/image-vector/pixel-art-illustration-cow-pixelated-600nw-2339497353.jpg",
  ]

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Ejercicio 2: Lazy Loading en Imágenes</h1>
      <p className="mb-4">Las siguientes imágenes solo se cargarán cuando sean visibles en la pantalla.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Imagen ${index + 1}`} />
        ))}
      </div>
      <Test2 />
    </div>
  )
}

export default Ejercicio2

