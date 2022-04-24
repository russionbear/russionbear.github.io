import MDEditor from '@uiw/react-md-editor';
import GithubTopbar from '../../pages/GithubTopbar/GithubTopbar';
// @ts-ignore
import {HashRouter as Router, Route, Routes, Navigate, useNavigate} from 'react-router-dom'
import GithubBooks from '../../pages/GithubBooks/GithubBooks';
import GithubNotes from '../../pages/GithubNotes/GithubNotes';
import GithubValue from '../../pages/GithubValue/GithubValue';
import GithubSource from '../../pages/GithubSource/GithubSource';
// import { useEffect } from 'react';


export default function GithubLayout() {
    // const nav_ = useNavigate()
    // useEffect(() => {
    //   console.log(nav_)
    // }, [nav_])
    
  return (<>
    <GithubTopbar />
      <div>
        {/* <MDEditor.Markdown source="Hello Markdown!  " /> */}
            <Routes>
            <Route path='/books' element={<GithubBooks />}></Route>
            <Route path='/notes' element={<GithubNotes />} />
            <Route path='/value' element={<GithubValue />} />
            <Route path='/source' element={<GithubSource />} />
            {/* <Route path='/source' element={<GithubSource />} /> */}
            {/* <Route path='*' element={<Navigate to="/login" />}></Route> */}
            </Routes>
      </div>
  </>);
}