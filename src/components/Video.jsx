export default function Video(params) {
  return (
    <video width="640" height="360" controls>
      <source
        src="https://www.w3schools.com/html/mov_bbb.mp4"
        type="video/mp4"
      />
    </video>
  )
}
