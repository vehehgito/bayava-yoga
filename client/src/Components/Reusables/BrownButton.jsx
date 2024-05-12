import React from 'react'

function BrownButton(props) {

    const onclick = props.onclick
    const text = props.text

  return (
    <div className=''>
        <button onClick={onclick} className="bg-smoke-brown hover:opacity-70 text-smoke-yellow px-5 py-2 rounded-md font-open-sans font-medium md:text-xl text-sm">{text}</button>
    </div>
  )
}

export default BrownButton