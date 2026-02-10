import { useState } from "react";
import AppDrawer from "../components/AppDrawer";
import { ExternalLink, Truck  } from "lucide-react";

const DRAWER_WIDTH = 256;

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className='flex w-full h-screen overflow-hidden'>
      <AppDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <main
        className={`flex-1 transition-[margin] duration-300 ease-in-out ${isOpen ? "ml-66" : "ml-15"
          }`}
      >
        <button onClick={() => setIsOpen(true)}>
          <ExternalLink  size={30} color="black"/>
        </button>
        <h1>this is dashboard</h1>
      </main>
    </div>
  )
}

export default Dashboard;