import React from 'react'
import '../App.css'
import styled from 'styled-components'

const UserCard = (props) => {
    const {data, followerData} = props
    return (
        <StyledUserCard>
            <div className='card'>
                <img src = {data.avatar_url} alt='User Avatar'/>
                <div className='card-info'>
                    <h3 className='name'>{data.name}</h3>
                    <p className='username'>{data.login}</p>
                    <p className='location'>{data.location}</p>
                    <p>Profile:
                        <a href={data.html_url}>{data.html_url}</a>
                    </p>
                    <p>Followers: {followerData}</p>
                    <p>Following: {data.following}</p>
                    <p>Bio: {data.bio}</p>
                </div>
            </div>
        </StyledUserCard>
    )
}

const StyledUserCard = styled.div `
    html, body, * {
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body {
  background: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
}
.container {
  max-width: 800px;
  margin: 50px auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
}

.header img {
  width: 150px;
  height: 150px;
}

.header p {
  font-size: 48px;
}

.cards {
  width: 100%;
}

.card {
  width: 100%;
  padding: 20px;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #FFF;
  margin-bottom: 30px;
}

.card img {
  width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;
}

.card .name {
  font-size: 3.4rem;
}

.card p {
  font-size: 1.4rem;
  margin-bottom: 3px;
}

.card .username {
  font-size: 1.8rem;
  font-style: italic;
  margin: 3px 0 10px;
}

`

export default UserCard;