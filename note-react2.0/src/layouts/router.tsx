// @ts-ignore
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import Login from '../pages/Login/Login'
import FirstLayout from './FirstLayout/FirstLayout'
import GitHubLayout from './GithubLayout/GitHubLayout'

export default function MyRouter() {
  return (
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/edit' element={<FirstLayout />} />
          {/* <Route path='/get' element={} /> */}
          <Route path='*' element={<GitHubLayout />} />
          {/* <Route path='*' element={<Navigate to="/login" />}></Route> */}
        </Routes>
      </Router>
  )
}
