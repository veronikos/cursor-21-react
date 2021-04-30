import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import Welcome from './components/Welcome'


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "a"
  }

  const [user, setUser] = useState({name: "", email: ""})
  const [error, setError] = useState("")

  const Login = details => {
    console.log(details)

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Loged In")
      setUser({
        name: details.name,
        email: details.email
      })
    } else {
      console.log("Details do not match!")
      setError(<div className="error">Details do not match!</div>)
    }
  }
  const Logout = () => {
    setUser({name: "", email: ""})
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome">
          <Welcome user={user} Logout={Logout}></Welcome>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
