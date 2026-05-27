// "use client";

// import { useState } from "react";
// import { navLinks } from "@/constants";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header id="header" className="header-section">
//       <div className="container">
//         <nav className="navbar flex items-center justify-between">

//           {/* Logo */}
//           <a href="#home" className="navbar-brand" data-scroll>
//             <img
//               src="/img/logo.png"
//               alt="Live Connect"
//               width={112}
//               height={90}
//               onError={(e) => {
//                 (e.target as HTMLImageElement).style.display = "none";
//               }}
//             />
//           </a>

//           {/* Desktop Menu */}
//           <div className="d-flex menu-wrap hidden md:flex">
//             <div id="navmenu" className="mainmenu">
//               <ul className="nav flex items-center gap-6">
//                 {navLinks.map((link) => (
//                   <li key={link.href}>
//                     <a
//                       data-scroll
//                       className={`nav-link ${link.active ? "active" : ""}`}
//                       href={link.href}
//                       onClick={() => setOpen(false)}
//                     >
//                       {link.label}
//                       {link.active && (
//                         <span className="sr-only">(current)</span>
//                       )}
//                     </a>
//                   </li>
//                 ))}

//                 <li>
//                   <a
//                     data-scroll
//                     className="download-btn"
//                     href="#contact"
//                   >
//                     Book a Service
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Mobile Button */}
//           <button
//             className="md:hidden flex flex-col gap-1"
//             onClick={() => setOpen(!open)}
//           >
//             <span className="w-6 h-0.5 bg-current"></span>
//             <span className="w-6 h-0.5 bg-current"></span>
//             <span className="w-6 h-0.5 bg-current"></span>
//           </button>
//         </nav>

//         {/* Mobile Menu (keeps same styles) */}
//         {open && (
//           <div className="md:hidden mainmenu mt-4">
//             <ul className="nav flex flex-col gap-4">
//               {navLinks.map((link) => (
//                 <li key={link.href}>
//                   <a
//                     data-scroll
//                     className={`nav-link ${link.active ? "active" : ""}`}
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                   >
//                     {link.label}
//                   </a>
//                 </li>
//               ))}

//               <li>
//                 <a
//                   data-scroll
//                   className="download-btn"
//                   href="#contact"
//                   onClick={() => setOpen(false)}
//                 >
//                   Book a Service
//                 </a>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import { navLinks } from "@/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header id="header" className="header-section">
      <div className="container">
        {/* Added pb-6 here */}
        <nav className="navbar flex items-center justify-between pb-6">

          {/* Logo */}
          <a href="#home" className="navbar-brand" data-scroll>
            <img
              src="/img/logo.png"
              alt="Live Connect"
              width={112}
              height={90}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </a>

          {/* Desktop Menu */}
          <div className="d-flex menu-wrap hidden md:flex">
            <div id="navmenu" className="mainmenu">
              <ul className="nav flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      data-scroll
                      className={`nav-link ${link.active ? "active" : ""}`}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                      {link.active && (
                        <span className="sr-only">(current)</span>
                      )}
                    </a>
                  </li>
                ))}

                <li>
                  <a
                    data-scroll
                    className="download-btn"
                    href="#contact"
                  >
                    Book a Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
            <span className="w-6 h-0.5 bg-current"></span>
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mainmenu mt-4 pb-6">
            <ul className="nav flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    data-scroll
                    className={`nav-link ${link.active ? "active" : ""}`}
                    href={link.href}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li>
                <a
                  data-scroll
                  className="download-btn"
                  href="#contact"
                  onClick={() => setOpen(false)}
                >
                  Book a Service
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}