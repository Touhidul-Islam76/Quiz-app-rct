import { Outlet } from 'react-router-dom'
import QuizProvider from './context/QuizContext'

function App() {
  return (
    <QuizProvider>
      <main>
        <Outlet />
      </main>
    </QuizProvider>
  )
}

export default App