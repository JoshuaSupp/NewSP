import React from 'react'
import '../../pages/style.css';
import Typewriter from "typewriter-effect";

function Text() {
  return (
    <Typewriter
      options={{
        strings: [
          "Amatuer Developer/Engineer",
          "Meu Labs Student",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  )
}

export default Text