import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const USER_TYPES = {
  PUBLIC: 'Public User',
  NORMAL_USER: 'Normal User',
  ADMIN_USER: "Admin User",
}


const CURRENT_USER_TYPE = USER_TYPES.ADMIN_USER

const App = () => {
  return (
    <div>
      <div style= {{display:'flex', gap: 16, padding: 8}}>
        <Link to={'/'}>Home</Link>
        {(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || 
          CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER) ? 
        <>
          <Link Link to={'/user'}>User</Link>
          <Link to={'/profile'}>Profile</Link>
        </>
        : null }

        {(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER) ? 
        <>
          <Link to={'/admin'}>Admin</Link>
        </>
        : null }
        
        
        <div>You are logged in as: {CURRENT_USER_TYPE}</div>
      </div>
      <AppRoutes />
    </div>
  )
}

function AppRoutes() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <PublicElement> 
            <Home/> 
          </PublicElement>
        }
      ></Route>
      <Route
        path="/user" 
        element={
          <UserElement>
            <User />
          </UserElement>
      }
      ></Route>
      <Route
        path="/profile" 
        element={
          <UserElement>
            <User />
          </UserElement>
      }
      ></Route>
      <Route 
        path="/admin" 
        element={
        <AdminElement>
          <Admin />
        </AdminElement>
      }
      ></Route>
      <Route path="*" element={<>Page Not Found!</>}></Route>
    </Routes>
  )
}

function Home () {
  return (
    <div>
      Home Page
    </div>
  )
}

function User () {
  return (
    <div>
      User Page
    </div>
  )
}

function Admin () {
  return (
    <div>
      Admin Page
    </div>
  )
}

function PublicElement ({children}) {
  return (
    <>{children}</>
  )
}

function UserElement ({children}) {

  if(CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER || 
     CURRENT_USER_TYPE === USER_TYPES.NORMAL_USER)
  {
    return (
      <>{children}</>
    )
  }
  else
  {
    return (
      <>You do not have access to this page.</>
      //add back to home page button
    )
  }
  
}

function AdminElement ({children}) {
  if (CURRENT_USER_TYPE === USER_TYPES.ADMIN_USER)
  {
    return (
      <>{children}</>
    )
  }
  else
  {
    return (
      <>You do not have access to this page.</>
      //add back to home page button
    )
  }
  
}

export default App;