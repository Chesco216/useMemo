import { useMemo, useState } from "react"
import styles from './index.module.css'

function App() {

  const [asdf, setASDF] = useState(false)

  const slowOperation = () => {
    setTimeout(() => console.log('delay'), 500)
    return 'pipipi'
  }

  const changeState = () => {
    setASDF(!asdf)
    console.log({asdf})
  }

  const cachedValue = useMemo(slowOperation, [asdf])

  return (
    <div className={styles.container}>
      <label>{asdf}</label>
      <label>{cachedValue}</label>
      <button onClick={() => changeState}>Change</button>
    </div>
  )
}

export default App
