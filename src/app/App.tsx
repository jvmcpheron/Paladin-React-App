import './App.css'
import { VideoCard } from '../components/VideoCard/VideoCard'

function App() {

  return (
    <>
      <div>
        <h1>PALADIN</h1>
        <h2>Strong for a purpose.</h2>
        <div>
          <VideoCard
            title="Boxing Stance Video"
            videoUrl="https://youtu.be/SjLXzCpRS8U"
            tags={["Boxing Fundamentals"]}
          />
        </div>
          
      </div>

    </>
  )
}

export default App
