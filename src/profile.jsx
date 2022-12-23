import * as React from 'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import AdminProfile from './adminProfile';
import  JakeProfile  from './jakeProfile';
//

// function ProfilePage() {
//   // Get the userId param from the URL.
//   let { userId } = useParams();
//   // ...
// }

export default function Users() {
    const {path} = useMatch();
  return (
    <Routes>
        <Route path={`${path}/jacob`}>
            <JakeProfile/>
        </Route>
        <Route element={<AdminProfile/>} path="/admin"/>
    </Routes>
  );
}