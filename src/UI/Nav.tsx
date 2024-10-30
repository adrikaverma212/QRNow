
// import { useState } from 'react';
// import { FaBars, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBell} from 'react-icons/fa';

//   function Nav() {
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
//     const toggleSidebar = () => {
//       setIsSidebarOpen(!isSidebarOpen);
//     };
//   return (
//     <div>
//        <header className="header">
//         <FaBars className="menu-icon" onClick={toggleSidebar} />
//         <h1>PURVANCHAL CAFE</h1>
//         <FaBell className="header-icon" />
//       </header>

//       <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <ul>
//           <li><FaUser /> Profile</li>
//           <li><FaCog /> Settings</li>
//           <li><FaQuestionCircle /> Help</li>
//           <li><FaSignOutAlt /> Log Out</li>
//           <li><FaSignInAlt /> Login</li>
//           <li><FaUserPlus /> Sign Up</li>
//         </ul>
//       </div>
     
//     </div>
   
//   )
// }

// export default Nav




import { useState } from 'react';
import { FaBars, FaUser, FaCog, FaQuestionCircle, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaBell } from 'react-icons/fa';

function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false );

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col">
   
      <header className="fixed top-0 left-0 w-full flex items-center bg-white p-4 shadow-lg z-50">
        <FaBars className="menu-icon text-green-500 text-2xl cursor-pointer mr-4" onClick={toggleSidebar}  />
        <h1 className="flex-1 text-green-800 font-bold ml-4 font-DynaPuff">PURVANCHAL CAFE</h1>
        <FaBell className="header-icon text-green-500 text-xl cursor-pointer ml-4" />
      </header>

    
      <div className={`fixed top-0 h-full bg-[#F0F4F3] p-4 transition-transform duration-300 ease-in-out shadow-lg transform `}>
        <ul className="mt-16 space-y-4">
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaUser className="mr-2" /> Profile
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaCog className="mr-2" /> Settings
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaQuestionCircle className="mr-2" /> Help
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaSignOutAlt className="mr-2" /> Log Out
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaSignInAlt className="mr-2" /> Login
          </li>
          <li className="flex items-center p-4 text-green-500 text-lg cursor-pointer hover:bg-green-100">
            <FaUserPlus className="mr-2" /> Sign Up
          </li>
        </ul>
      </div>

      {/* Main content */}
      <main className={`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'} mt-16 p-4`}>
        {/* Your main content goes here */}
      </main>
    </div>
  );
}

export default Nav;
