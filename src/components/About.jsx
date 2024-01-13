import React from 'react'

function About() {
  return (
    <>
    <div className='container min-vh-100'>
      <h2>About this application</h2>
      <p>This app is created with MERN stack this is for learning purpose real word application is more secure and complex</p>
      <h2>Features</h2>
      <ul>
        <li>Create account</li>
        <li>Login with created account</li>
        <li>Every user can access only there account details not others</li>
        <li>Add notes,edit notes,delete notes</li>
        <li>With dark mode and light mode</li>
      </ul>
      <h2>Techs</h2>
      <ul>
        <li>Mongo DB</li>
        <li>Express JS</li>
        <li>bcrypt for encrypt password</li>
        <li>json web token for generate token </li>
      </ul>
      <p>Other details you can visit in github readme</p>
    </div>
    </>
  )
}

export default About