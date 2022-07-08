import React from 'react'
import './Ownpic.css';
import '../App.css';

function Ownpic() {
  return (
    <div className='owncontainer'>
        <div class="cover">
            <img src="/image/com.png" alt="select" />
        </div>
        <div class="coverpic">
            <img src="/image/mainbg.png" alt="select" />
        </div>
        <h1 >
            <span className='outline' data-text="Kobe Christian L. Dahiroc">Kobe Christian L. Dahiroc</span>
        </h1>
        <p className='outline' data-text="I'm into Programming and a Drummer.">I'm into Programming and a Drummer.</p>
    </div>
  )
}

export default Ownpic