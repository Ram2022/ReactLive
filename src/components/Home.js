import React, { useState } from 'react';

export default function Home() {
  // Declare a new state variable, which we'll call "count"
  var [count, setCount] = useState(0);
    var [myd,trit] = useState("");
    
  return (
    <div>
      <h3 className="text-white">{myd} {count} times</h3>
      <button className="btn btn-primary" onClick={() => trit("Hello") &setCount(count+1)}>
        How much time you clicked me
      </button>
    </div>
  );
}

