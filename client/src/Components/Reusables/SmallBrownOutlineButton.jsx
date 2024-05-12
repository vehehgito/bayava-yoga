import React from 'react'

function SmallBrownOutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='min-[933px]:text-xl text-sm bg-transparent hover:bg-white text-smoke-brown font-semibold p-2 border border-smoke-brown hover:border-transparent rounded-md'>
            {text}
        </button>
    </div>
  )
}

export default SmallBrownOutlineButton