import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import styles from "./App.module.css"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <main className={styles.main}>
        <h1>Counteudo...</h1>
      </main>
      <Footer/>
    </div>
  )
}

export default App
