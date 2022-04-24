import GithubTopbar from '../../pages/GithubTopbar/GithubTopbar';
// @ts-ignore
import { HashRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import GithubBooks from '../../pages/GithubBooks/GithubBooks';
import GithubNotes from '../../pages/GithubNotes/GithubNotes';
import GithubValue from '../../pages/GithubValue/GithubValue';
import GithubSource from '../../pages/GithubSource/GithubSource';
import { useEffect, useMemo } from 'react';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import style from './GithubLayout.module.css';
import Store from '../../redux/store';


export default function GithubLayout() {
  const [containTop] = useMemo(()=>[Store.getState().github.top], [])

  const nav_ = useNavigate()
  useEffect(() => {
    // load source
    // console.log(nav_)
    return () => {

    }
  }, [])


  return (<>
    <GithubTopbar />
    <div className={style.container} style={{top: containTop+'px'}}>
      <Routes>
        <Route path='/books' element={<GithubBooks />}></Route>
        <Route path='/notes' element={<GithubNotes />} />
        <Route path='/value' element={<GithubValue />} />
        <Route path='/source' element={<GithubSource />} />
        <Route path='/error' element={<ErrorPage />} />
        <Route path='/' element={<GithubBooks />} />
      </Routes>
    </div>
  </>);
}