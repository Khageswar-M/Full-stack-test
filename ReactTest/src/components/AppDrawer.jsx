import React from 'react';
import { motion } from 'motion/react'
import { X } from 'lucide-react';

const drawerVariants = {
    closed: {
        x: "-80%",
        transition: {
            type: "tween",
            duration: 0.3
        },
    },
    open: {
        x: 0,
        transition: {
            type: "tween",
            duration: 0.3
        },
    },
};

const AppDrawer = ({ isOpen, onClose }) => {
    return (
        <>
            <motion.aside
                variants={drawerVariants}
                initial="closed"
                animate={isOpen ? "open" : "closed"}
                className='fixed top-0 left-0 z-50 h-screen w-64 bg-blue-400 overflow-y-auto shadow-lg'
            >

                <div className='bg-gray-400 flex justify-between items-center p-1'>
                    <p>My App</p>
                    <button
                        onClick={onClose}
                        className='bg-amber-200 rounded-full flex items-center justify-center h-10 w-10 hover:bg-amber-500 hover:cursor-pointer active:bg-amber-200'
                    >
                        <X size={30} color='#000' className='stroke-amber-600 stroke-1'/>
                    </button>
                </div>
                <div className="p-4 text-white font-bold text-xl">
                    My App
                </div>

                <div className="p-4 text-white">
                    <p>Dashboard</p>
                    <p>Profile</p>
                    <p>Settings</p>
                </div>
            </motion.aside>
        </>
    )
}

export default AppDrawer