import React from 'react'
import axios from 'axios'
import UserCard from './Components/UserCard'

class App extends React.Component {

  state = {
    userData: [],
    userFollowerData: []
    
  }


  componentDidMount() {
    axios.get('https://api.github.com/users/john-chamberlin')
      .then((res)=> {
        console.log(res.data)
        this.setState({
          userData: res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })

      axios.get('https://api.github.com/users/john-chamberlin/followers')
      .then((res)=> {
        console.log(res.data)
        this.setState({
          userFollowerData: res.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })


  }
  

  render() {
    return(
      <div>
        <UserCard data={this.state.userData} followerData={this.state.userFollowerData}/>
      </div>
    )
  }

}

export default App;
