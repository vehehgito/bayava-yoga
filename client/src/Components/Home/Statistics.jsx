import React from 'react'

function Statistics() {
  return (
    <div className='min-h-screen bg-smoke-yellow flex flex-col items-center justify-between py-40'>
        <div>
            <h1 className='md:md:text-6xl text-3xltext-6xl text-4xl font-bold uppercase'>
                People we Helped
            </h1>
        </div>
        <div className='w-full flex items-center justify-center'>
            <h1 className='md:text-4xl text-xl w-1/2 text-center uppercase'>
                Our expert teachers have provided the best around the world
            </h1>
        </div>
        <div className='w-full flex items-center justify-between md:px-40 px-12 md:gap-0 gap-5'>
            <div className='flex flex-col items-center justify-center gap-3 text-center'>
                <h1 className='md:text-6xl text-3xl font-bold uppercase'>
                    1000
                </h1>
                <h1 className='md:text-2xl text-sm font-bold uppercase bg-smoke-brown flex items-center justify-center text-white rounded-md px-2'>
                    People Served
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 text-center'>
                <h1 className='md:text-6xl text-3xl font-bold uppercase'>
                    500
                </h1>
                <h1 className='md:text-2xl text-sm font-bold uppercase bg-smoke-brown flex items-center justify-center text-white rounded-md px-2'>
                    Countries
                </h1>
            </div>
            <div className='flex flex-col items-center justify-center gap-3 text-center'>
                <h1 className='md:text-6xl text-3xl font-bold uppercase'>
                    100
                </h1>
                <h1 className='md:text-2xl text-sm font-bold uppercase bg-smoke-brown flex items-center justify-center text-white rounded-md px-2'>
                    Volunteers
                </h1>
            </div>
        </div>
    </div>
  )
}

export default Statistics