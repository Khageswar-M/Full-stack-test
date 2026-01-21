import { useState } from "react";
import "../assets/styles/dashboard.css"
import Popup from "../components/Popup";


const Dashboard = () => {
    const[isPopup, setIsPopup] = useState(false);


  return (
    <div
        className='min-h-screen bg-linear-to-br from-blur-50 to-indigo-100 p-8'
    >
        <div className="max-w-4xl mx-auto">

            <div className="bg-white rounded-xl shadow-lg p-8 mb-6">

                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                    Professional React Popup Component
                </h1>

                <p className="text-gray-600 mb-6">
                    A production ready modal with accessibility, animations and best practices.
                </p>

                <button
                    onClick={() => setIsPopup(true)}
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors shadow-md hover:shadow-lg"
                >
                    Open Pop-up
                </button>

            </div>

        </div>

        <Popup 
            isOpen={isPopup}
            onClose={() => setIsPopup(false)}
            title="Welcome to the Modal!"
        >   

            <div className="space-y-4"> 

                <p className="text-gray-700">
                    This is a professional grade Popup component built with react best practices.
                </p>
                 
                 <div className="flex gap-3 pt-4">
                    <button
                        onClick={() => setIsPopup(false)}
                        className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            alert("Action confirmed!")
                            setIsPopup(false)
                        }}
                        className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                    >
                        Confirm
                    </button>
                 </div>
            </div>

        </Popup>
        
    </div>
  )
}

export default Dashboard;