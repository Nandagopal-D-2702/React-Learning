
import { Button } from './Components/Button'

function App() {
  return (
    <>
      <div style={{ padding: '2rem' }}>
        <Button label="Primary Action" onClick={() => alert('Clicked!')}/>
        <br /><br />
        <Button label="Secondary Action" variant="secondary"/>
        <br /><br />
        <Button label="Disabled Button" disabled/>
      </div>
    </>
  )
}

export default App
