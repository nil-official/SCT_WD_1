import React from 'react'

const Footer = () => {
    return (
        <div className='w-full py-8 lg:py-12 bg-black text-white flex flex-col gap-5 items-center justify-center'>

            <div className='w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] flex flex-col items-center gap-4'>
                <div className='w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-0'>
                    {/* Left */}
                    <div className='flex flex-col justify-end gap-4'>
                        <div className='w-[130px] xl:w-[130px] 2xl:w-[160px] cursor-pointer'>
                            <img src="images/logo.png" alt="Learnify" />
                        </div>
                        <div>
                            <ul className='flex flex-col lg:flex-row text-sm gap-2 xl:gap-2 2xl:gap-4 2xl:text-sm'>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Courses</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Learn</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Workshops</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Topics</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Teachers</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Reviews</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>FAQ</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Join Now</li>
                                <li className='text-[#636363] hover:text-gray-300 cursor-pointer'>Login</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right */}
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 lg:justify-end'>
                            <img src="logos/linkedin.svg" alt="linkedin" className='w-5 xl:w-5 2xl:w-7 cursor-pointer' />
                            <img src="logos/x.svg" alt="x" className='w-5 xl:w-5 2xl:w-7 cursor-pointer' />
                            <img src="logos/facebook.svg" alt="facebook" className='w-5 xl:w-5 2xl:w-7 cursor-pointer' />
                            <img src="logos/instagram.svg" alt="instagram" className='w-5 xl:w-5 2xl:w-7 cursor-pointer' />
                        </div>
                        <div className='flex gap-4'>
                            <img src="logos/applestore.svg" alt="applestore" className='w-28 xl:w-28 2xl:w-32 cursor-pointer' />
                            <img src="logos/googleplay.svg" alt="googleplay" className='w-28 xl:w-28 2xl:w-32 cursor-pointer' />
                        </div>
                        <div className='flex lg:justify-end text-sm'>
                            <p className='text-[#636363] hover:text-gray-300 cursor-pointer'>
                                Contact: support@learnify.com
                            </p>
                        </div>
                    </div>

                </div>

                <div className='w-[100%]'>
                    <hr className='border-0 h-[2px] bg-[#636363]' />
                </div>

                <div className='w-full text-sm lg:flex lg:justify-between'>
                    <div className='flex'>
                        <p className='text-[#636363] hover:text-gray-300 cursor-pointer'>
                            Learnify is proudly made in India, IN
                        </p>
                    </div>
                    <div className='flex'>
                        <p className='text-[#636363] hover:text-gray-300 cursor-pointer'>
                            © 2024 Learnify · Terms of Service · Privacy Policy
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer