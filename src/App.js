import React from 'react';

import image from "./imageimage.jpg"

function App() {
  return (
    <div>
    <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
      <h1 className="title red">Your name here</h1>
      <br />
      <img src="/image1.jpg" /> <br />
      <img src={image} />    </div>
      <iframe width="900" height="506" src="https://www.youtube.com/embed/f2JuxM-snGc?list=RDf2JuxM-snGc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/* <video width={320} height={240} controls>
      <source src="https://www.youtube.com/watch?v=f2JuxM-snGc&list=RDf2JuxM-snGc&start_radio=1" type="video/mp4" />
    </video> */}
  </div>
  
  );
}

export default App;

