import React from 'react'

function YellowOutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='sm:text-5xl min-[933px]:text-3xl text-sm bg-transparent hover:bg-white hover:text-smoke-brown text-smoke-yellow font-semibold p-4 border border-smoke-yellow hover:border-transparent rounded-md'>
            {text}
        </button>
    </div>
  )
}

export default YellowOutlineButton