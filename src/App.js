import React from 'react';
import './App.css';
import { getTotalDays, getNewsFromCkomop0xMe, getTotalDaysWithGraphqlRequest, getUsers } from './services'

class App extends React.PureComponent {
  state = {
    totalDays: '',
    users: []
  }

  addUser = (username) => {

  }

  componentDidMount() {
    getTotalDaysWithGraphqlRequest().then((totalDays) => {
      this.setState({
        totalDays
      })
    }).catch(console.error)

    getUsers().then((users) => {
      this.setState({
        users
      })
    })
  }

  render() {
    return (
      <div className="">
        Total vacation days: {this.state.totalDays}
        <div>
          List of users
          <ul>
            {this.state.users.map((user, index) => (
              <li key={index}>{user.username}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

}

export default App;
