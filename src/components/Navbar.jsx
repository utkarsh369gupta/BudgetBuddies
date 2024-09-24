import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-[#14303b] p-5 items-center w-full'>
            <div className='flex m-2 items-center gap-5 ml-3 justify-between'>
                <div className='flex items-center gap-3 cursor-pointer'>
                    <img className="h-auto max-w-20 transition-all duration-300 rounded-lg  filter inline hover:max-w-24" src="images/budgetbuddies.png" alt="image description" />
                    <p className="text-3xl font-bold text-white">Budget Buddy</p>
                </div>
                <div className='hidden sm:flex gap-x-10 text-xl text-white'>
                    <p className='hover:text-slate-300 cursor-pointer'>HOME</p>
                    <p className='hover:text-slate-300 cursor-pointer'>ABOUT US</p>
                    <p className='hover:text-slate-300 cursor-pointer'>CONTACT</p>
                </div>
                <div className='flex gap-4 text-2xl text-white cursor-pointer'>
                    <p className='text-orange-200 hover:text-orange-400'>SignUp or Login</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
