import React from 'react'

const Investment = () => {
    return (
        <>
            <figure className="relative max-w-full h-auto transition-all duration-300 filter">
                <a href="#">
                    <img
                        src="images/investment.jpg"
                        alt="Investments"
                    />
                </a>
                <figcaption className="absolute px-10 top-28 font-serif text-white bottom-6">
                    <p className='font-bold text-slate-200 text-4xl pb-7'>Increase your Assets</p>
                    <p className='text-6xl text-orange-400 pb-3 flex gap-3'><p className='underline underline-offset-8'>Manage finance </p>For the Future</p>
                    <p className='text-6xl text-orange-500'>Using AWS Cloud.</p>
                </figcaption>
            </figure>
        </>
    )
}

export default Investment