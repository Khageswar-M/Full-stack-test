import React, { useEffect, useRef, useState } from 'react'

const Popup = ({ isOpen, onClose, title, children }) => {
    const popupRef = useRef(null);

    // Handle ESC key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isOpen) onClose();
        };

        document.addEventListener('keydown', handleEscape);

        return () => document.removeEventListener('keydown', handleEscape);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => document.body.style.overflow = 'unset';
    }, [isOpen]);

    // Handle click outside
    const handleBackdropClick = (e) => {
        if (popupRef.current && !popupRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center p-4'
            onClick={handleBackdropClick}
        >

            {/* BACK-DROP */}
            <div className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm' />

            {/* POP-UP */}
            <div
                ref={popupRef}
                className='relative bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all'
            >

                {/* HEADER */}
                <div
                    className='flex items-center justify-between p-6 border-b border-gray-200'
                >

                    <h2 className='text-2xl font-semibold text-gray-900'>{title}</h2>

                    <button
                        onClick={() => onClose}
                        className='text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100'
                        aria-label='Close modal'
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                </div>

                {/* CONTENT */}
                <div className='p-6 max-h-[70h] overflow-y-auto'>
                    {children}
                </div>

            </div>

        </div>
    )
}

export default Popup