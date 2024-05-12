import React from 'react'

function Contact() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-between py-40'>
        <div>
            <h1 className='min-[933px]:text-7xl text-4xl font-bold uppercase'>
                Let&apos;s talk Yoga
            </h1>
        </div>
        <div className='flex items-center md:flex-row flex-col justify-between'>
            <div className='w-full p-12'>
                <img src='https://images.unsplash.com/photo-1587560699334-bea93391dcef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8fDA%3D' alt='yoga' className='w-full h-96 object-cover rounded-lg'/>
            </div>
            <div className='w-full'>
                <form action="" className='flex flex-col gap-5 p-10 w-full'>
                    <input type="text" placeholder='Name' className='p-3 rounded-md border border-black'/>
                    <input type="email" placeholder='Email' className='p-3 rounded-md border border-black'/>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message' className='p-3 rounded-md border border-black'></textarea>
                    <div className='w-full flex justify-end'>
                        <button className='bg-smoke-brown text-white p-3 rounded-md'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact