import logo from './logo.svg'
import './App.css'
import sample from './assets/hearts.mp4'
import sample2 from './assets/heart.png'
import sample3 from './assets/second.jpg'
import sample4 from './assets/third1.png'
import sample5 from './assets/fourth.jpg'
import LalithAashi from './components/lalithaashi'

function App() {
  return (
    <>
      <section>
        <video autoPlay muted loop>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='home-content'>
          <h1 className='glow'>For my Aashi</h1>
          <a href='#middle-page'>
            <img src={sample2} alt='no image' width={'100px'} />
          </a>
        </div>
        <div className='heart-button'></div>
      </section>

      <section id='middle-page'>
        <video autoPlay muted loop>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='home-content-2'>
          <img src={sample3} alt='no img' srcset='' width={800} height={1000} />
        </div>
      </section>

      <section id='middle-page-2'>
        <video autoPlay muted loop>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='home-content-2'>
          <img src={sample5} alt='no img' srcset='' width={650} height={650} />
        </div>
      </section>

      <section id='last-page'>
        <video autoPlay muted loop>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='home-content-2'>
          <img src={sample4} alt='no img' srcset='' width={600} height={600} />
        </div>
      </section>

      <section>
        <video autoPlay muted loop>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='home-content'>
          <h1 className='glow'>I will love you forever and forever</h1>
        </div>
        <div className='lalith'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1>Yours Lalith</h1>
        </div>
      </section>
    </>
  )
}

export default App
