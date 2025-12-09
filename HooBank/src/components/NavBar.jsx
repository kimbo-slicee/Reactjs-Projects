import {useState} from 'react';
import {close, logo, menu} from "../assets/index.js";
import {navLinks} from "../constants/index.js";
export const NavBar = () => {
    const [toggle,setToggle]=useState(false);
    return (
        <nav className="w-full flex py-6 justify-between items-center navbar ">
             <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"/>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
                {navLinks.map((link, index) =>(
                        <li key={index} className={`font-poppins group transition-all duration-150
                     font-normal cursor-pointer text-[16px] text-white 
                     ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
                     `}>
                            <a href={`#${link.id}`} className="py-1">{link.title}</a>
                            <hr className='border-none outline-none h-0.5 bg-blue-gradient w-full m-auto hidden group-hover:block
                           '/>
                        </li>
                    )
                )}
            </ul>
            {/*mobile NavBar */}
            <div className={`sm:hidden flex flex-1 justify-end items-center`}>
                <img src={toggle?close:menu} alt="menu" className="w-[28] h-[28] object-contain
                cursor-pointer" onClick={()=>setToggle(!toggle)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0
                mx-2 min-x-[140px] rounded-xl sidebar`}>
                    <ul className="list-none flex flex-col justify-end items-center flex-1">
                        {navLinks.map((link, index) => (
                                <li key={index} className={`font-poppins
                     font-normal cursor-pointer text-[16px] text-white 
                     ${index === navLinks.length - 1 ? "mr-0" : "mb-10"}
                     `}>
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}