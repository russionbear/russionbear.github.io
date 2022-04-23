// @ts-ignore
import {HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from '../pages/Login/Login'
import FirstLayout from './FirstLayout/FirstLayout'

export default function MyRouter() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/note' element={<FirstLayout />} />
          <Route path='*' element={<Navigate to="/login" />}></Route>
        </Routes>
      </Router>
  )
}
