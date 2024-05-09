import React from 'react'

function OutlineButton(props) {

    const text = props.text
    const onclick = props.onclick

  return (
    <div>
        <button onClick={onclick} className='bg-transparent hover:bg-white text-white font-semibold hover:text-light-blue py-2 px-4 border border-white hover:border-transparent rounded-full'>
            {text}
        </button>
    </div>
  )
}

export default OutlineButton