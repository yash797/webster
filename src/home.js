import React from 'react'
import Background from './Home/background'
import Hero from './Home/hero'
import Req from "./Home/requirements";

function home() {
  return (
    <div className="w-full h-[110vh]">
        <Hero/>
      <Background/>
      {/* <Req/> */}
    </div>
  );
}

export default home