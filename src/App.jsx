import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateQuestion from './pages/CreateQuestion'
import StartQuiz from './pages/StartQuiz'
import DeleteQuestion from './pages/DeleteQuestion'
import AllQuestions from './pages/AllQuestions'
import Topic from './Components/Topic'

function App() {

  return (
    <>
    <div className='dash-background'>
      <h1 style={{fontSize: 75, textAlign: 'center' }} className='homefont'>Quiz-Tastic</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/createQuiz' element={<Topic/>}/>
          <Route path='/createQuestionForm' element={<CreateQuestion/>}/>
          <Route path='/startQuiz' element={<StartQuiz />} />
          <Route path='/deleteQuestion' element={<DeleteQuestion />}/>
          <Route path='/allQuizzes' element={<AllQuestions />}/>
        </Routes>
      </BrowserRouter>
    </div>
  </>
  )
}

export default App
