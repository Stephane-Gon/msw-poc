import PrimaryTemplate from "./design-system/templates/PrimaryTemplate"
import { useMockApi } from "./store/indexApi"
import { worker } from './mocks/browser';

if (useMockApi) {
    worker.start()
}

function App() {
    
  return (
    <PrimaryTemplate>
      <h1>Home</h1>
    </PrimaryTemplate>
  )
}

export default App
