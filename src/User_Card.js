import React from 'react'
import styled from 'styled-components';
// import { Card } from 'react-bootstrap' ; 
import axios from 'axios'
import { useState , useEffect } from 'react';



const StyledCard = styled.div`
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}
`



export const UserCard =  () => {
  const [user , setUser] = useState({
    loading : true , 
    data : {}
  }) ; 
  
  useEffect(
  async () => {
const res = await  axios('https://randomuser.me/api')

 setUser({data : res.data.results[0], loading : false
})
console.log(res.data) ;
  },[])
  if (!(user.loading)) {
      return (
              <StyledCard>
        <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img src={user.data.picture.medium} alt="Admin" className="rounded-circle" width="150" />
                    <div className="mt-3">
                      <h4>{user.data.name.title} {user.data.name.first} {user.data.name.last}</h4>
                      <p className="text-secondary mb-1">Full Stack Developer</p>
                      <p className="text-muted font-size-sm">{user.data.location.city}</p>
                      <button className="btn btn-primary">{user.data.gender}</button>
                      <button className="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                  </div>
                  </div>
        </StyledCard>
 
    )
  
}
else return 'Loading' }

