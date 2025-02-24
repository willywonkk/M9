"use client"

import type React from "react"

import { useRef, useState } from "react"

const ImageEditor = () => {
  const [image, setImage] = useState<string | null>(null)
  const [brightness, setBrightness] = useState(100)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => setImage(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const applyFilter = (filter: string) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx || !image) return

    const img = new Image()
    img.src = image
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        if (filter === "grayscale") {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
          data[i] = data[i + 1] = data[i + 2] = avg
        } else if (filter === "invert") {
          data[i] = 255 - data[i]
          data[i + 1] = 255 - data[i + 1]
          data[i + 2] = 255 - data[i + 2]
        } else if (filter === "brightness") {
          data[i] = Math.min(255, data[i] * (brightness / 100))
          data[i + 1] = Math.min(255, data[i + 1] * (brightness / 100))
          data[i + 2] = Math.min(255, data[i + 2] * (brightness / 100))
        }
      }

      ctx.putImageData(imageData, 0, 0)
    }
  }

  const adjustBrightness = (amount: number) => {
    setBrightness((prev) => {
      const newBrightness = Math.max(0, Math.min(200, prev + amount))
      applyFilter("brightness")
      return newBrightness
    })
  }

  return (
    <div className="text-center p-4">
      <input type="file" onChange={handleImageUpload} className="mb-4" />
      <div className="mb-4">
        <button onClick={() => applyFilter("grayscale")} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">
          Escala de Grises
        </button>
        <button onClick={() => applyFilter("invert")} className="bg-red-500 text-white px-4 py-2 m-2 rounded">
          Invertir Colores
        </button>
        <button onClick={() => adjustBrightness(10)} className="bg-green-500 text-white px-4 py-2 m-2 rounded">
          Aumentar Brillo
        </button>
        <button onClick={() => adjustBrightness(-10)} className="bg-yellow-500 text-white px-4 py-2 m-2 rounded">
          Disminuir Brillo
        </button>
      </div>
      <div className="mb-4">
        <span className="mr-2">Brillo: {brightness}%</span>
        <input
          type="range"
          min="0"
          max="200"
          value={brightness}
          onChange={(e) => {
            setBrightness(Number(e.target.value))
            applyFilter("brightness")
          }}
          className="w-64"
        />
      </div>
      <canvas ref={canvasRef} className="border mt-4 mx-auto"></canvas>
    </div>
  )
}

export default ImageEditor

