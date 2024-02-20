import { useEffect, useState } from 'react'
import YoutubePlayer from 'react-player/youtube'

// Render a YouTube video player
export default function VideoPlayer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="h-80 w-full flex">
      {isClient && (
        <YoutubePlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Ejemplo de URL de YouTube, puedes cambiarlo por la URL del vídeo que deseas reproducir
          controls={true} // Agrega controles de reproducción
          width="100%" // Ajusta el ancho del reproductor
          height="100%" // Ajusta el alto del reproductor
        />
      )}
    </div>
  )
}
