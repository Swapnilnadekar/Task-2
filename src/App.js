import { useState } from 'react'
import Animation from './Animation/Animation'
import './App.css'
import Header from './Components/Header/Header'

const App = (props) => {
  const [users, setUsers] = useState([])
  const [loadingBar, setLoadingBar] = useState(false)

  const getUsers = (props) => {
    setLoadingBar(true)
    fetch('https://reqres.in/api/users?page=1')
      .then((response) => response.json())
      .then((response) => {
        setUsers(response.data)
      })
      .then(
        (response) =>
          new Promise((complete) =>
            setTimeout(() => {
              complete(response)
            }, 3000),
          ),
      )
      .then(() => {
        setLoadingBar(false)
      })
  }

  return (
    <div className="app_container">
      <Header function={getUsers} />

      <div className="row_container">
        {loadingBar ? (
          <Animation loadingBar={loadingBar} />
        ) : users.length > 0 ? (
          users.map((curElem) => {
            return (
              <div className="align_container">
                <div className="image">
                  <img src={curElem.avatar} className="imag" />
                </div>
                <div className="info_container">
                  <div className="userid_container">
                    <span className="user">User ID: </span>
                    <span className="user_id">{curElem.id}</span>
                  </div>
                  <div className="firstn_container">
                    <span className="first">First Name: </span>
                    <span className="first_name">{curElem.first_name}</span>
                  </div>
                  <div className="lastn_container">
                    <span className="last">Last Name: </span>
                    <span className="last_name">{curElem.last_name}</span>
                  </div>
                  <div className="email_container">
                    <span className="email">Email: </span>
                    <span className="email_id">{curElem.email}</span>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
export default App
