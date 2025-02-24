import type React from "react"
import { useState } from "react"

interface OptimizedImage {
  format: string
  url: string
  size: number
}

const ImageOptimizer = () => {
  const [originalFile, setOriginalFile] = useState<File | null>(null)
  const [optimizedImages, setOptimizedImages] = useState<OptimizedImage[]>([])

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setOriginalFile(file)
      generateOptimizedImages(file)
    }
  }

  const generateOptimizedImages = (file: File) => {
    const formats = ["image/jpeg", "image/png", "image/webp", "image/avif"]
    const reader = new FileReader()

    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const optimized = formats.map((format) => ({
          format,
          url: URL.createObjectURL(file),
          size: estimateFileSize(img, format),
        }))
        setOptimizedImages(optimized)
      }
      img.src = e.target?.result as string
    }

    reader.readAsDataURL(file)
  }

  const estimateFileSize = (img: HTMLImageElement, format: string): number => {
    const canvas = document.createElement("canvas")
    canvas.width = img.width
    canvas.height = img.height
    const ctx = canvas.getContext("2d")
    if (!ctx) return 0

    ctx.drawImage(img, 0, 0)

    let quality: number
    switch (format) {
      case "image/jpeg":
        quality = 0.9
        break
      case "image/webp":
        quality = 0.8
        break
      case "image/avif":
        quality = 0.7
        break
      default:
        quality = 1
    }

    const dataUrl = canvas.toDataURL(format, quality)
    const base64 = dataUrl.split(",")[1]
    const estimatedSize = Math.round((base64.length * 3) / 4)

    return estimatedSize
  }

  const formatBytes = (bytes: number): string => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const sizes = ["Bytes", "KB", "MB", "GB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
  }

  return (
    <div className="flex flex-col items-center">
      <input type="file" onChange={handleFileChange} className="mb-4" accept="image/*" />
      {originalFile && (
        <div className="w-full mb-6">
          <h2 className="text-xl font-bold mt-4">Imagen Original</h2>
          <img src={URL.createObjectURL(originalFile) || "/placeholder.svg"} alt="Original" className="w-60 mt-2" />
          <p>Tamaño: {formatBytes(originalFile.size)}</p>
        </div>
      )}

      {optimizedImages.length > 0 && (
        <div className="w-full">
          <h2 className="text-xl font-bold">Imágenes Optimizadas</h2>
          <table className="mt-4 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 p-2">Formato</th>
                <th className="border border-gray-300 p-2">Imagen</th>
                <th className="border border-gray-300 p-2">Tamaño Estimado</th>
              </tr>
            </thead>
            <tbody>
              {optimizedImages.map((img, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="border border-gray-300 p-2">{img.format.split("/")[1].toUpperCase()}</td>
                  <td className="border border-gray-300 p-2">
                    <img src={img.url || "/placeholder.svg"} alt={img.format} className="w-40 mx-auto" />
                  </td>
                  <td className="border border-gray-300 p-2">{formatBytes(img.size)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ImageOptimizer

