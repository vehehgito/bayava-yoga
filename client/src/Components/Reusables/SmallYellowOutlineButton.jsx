import React from 'react'

function SmallYellowOutlineButton(props) {
    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='min-[933px]:text-xl text-sm bg-transparent hover:bg-white hover:text-smoke-brown text-smoke-yellow font-semibold p-2 border border-smoke-yellow hover:border-transparent rounded-md'>
            {text}
        </button>
    </div>
  )
}

export default SmallYellowOutlineButton