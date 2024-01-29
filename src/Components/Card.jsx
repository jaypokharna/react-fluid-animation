import React from 'react'
import { MdContactPage } from "react-icons/md";
import { BsDownload } from "react-icons/bs";
import { IoLockClosedOutline } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({ data , reference }) => {
    return (
            <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} whileHover={{ scale: 1.1 }} className="card relative h-72 w-64 bg-zinc-900/90 rounded-[40px] m-5 text-white px-8 py-10 overflow-hidden">
                <MdContactPage />
                <p className='text-sm mt-3 font-semibold leading-tight'>{data.desc}</p>
                <div className="footer absolute bottom-0 left-0 w-full x ">
                    <div className='flex items-end justify-between mb-1 py-3 px-8'>
                        <h5>{data.data}</h5>
                        <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>
                            {data.close ? <IoLockClosedOutline size={"0.8em"} color='#fff' /> : <BsDownload size={"0.8em"} color='#fff' />}
                        </span>
                    </div>
                    {
                        data.author === "unknown" ? (<div className="bottom-tag w-full py-4 bg-red-600 flex items-center justify-center">
                            <h3 className='text-sm font-semibold'>Unknown</h3>
                        </div>) : (<div className="bottom-tag w-full py-4 bg-green-600 flex items-center justify-center">
                            <h3 className='text-sm font-semibold'>{data.author}</h3>
                        </div>)
                    } 

                </div>
            </motion.div>
    )
}

export default Card