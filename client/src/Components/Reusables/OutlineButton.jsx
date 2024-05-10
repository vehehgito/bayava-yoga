import React from 'react'

function OutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='sm:text-5xl min-[933px]:text-3xl text-sm bg-transparent hover:bg-white text-white font-semibold hover:text-light-blue p-4 border border-white hover:border-transparent rounded-md'>
            {text}
        </button>
    </div>
  )
}

export default OutlineButton