import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
function Nav() {
    const [text,setText] = useState("")
    function openNav(){
        let mediaQuery = window.matchMedia('(min-width: 850px)');
        if(mediaQuery.matches){
            document.body.classList.toggle('showSecondary');
        }else{
            document.body.classList.toggle('show');
        }
        
    }

    function preventFocus(e){
        e.preventDefault();
    }

    function isDesktop(e) {
        if(e.matches){
            document.body.classList.remove('show');
            setText("More");
        }else{
            document.body.classList.remove('showSecondary');
            setText("Sections");
        }

    }

    useEffect(() => {
        let mediaQuery = window.matchMedia('(min-width: 850px)');
        mediaQuery.addEventListener('change', isDesktop);
        
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeEventListener('change', isDesktop);
  }, []);
    return (
        <nav >
            
           < ul className='nav-bar'>
                        <li><NavLink to="/">Local</NavLink></li>
                        <li><NavLink to="/">Canada</NavLink></li>
                        <li><NavLink to="/">Indigenous</NavLink></li>
                        <li><NavLink to="/">World</NavLink></li>
                        <li><NavLink to="/">Opinion</NavLink></li>
                    </ul>
            <button className="btn-menu" onClick={openNav}
                onMouseDown={preventFocus}>
                    <span className="text" >{text}</span>
                <span className="material-icons">keyboard_arrow_down</span>
                
            </button>
            <div className='nav-items'>
                    <ul className='primary'>
                        <li><NavLink to="/">Local</NavLink></li>
                        <li><NavLink to="/">Canada</NavLink></li>
                        <li><NavLink to="/">Indigenous</NavLink></li>
                        <li><NavLink to="/">World</NavLink></li>
                        <li><NavLink to="/">Opinion</NavLink></li>
                    </ul>
                    <ul className='secondary'>
                        <li><NavLink to="/">Business</NavLink></li>
                        <li><NavLink to="/">Entertainment</NavLink></li>
                        <li><NavLink to="/">Health</NavLink></li>
                        <li><NavLink to="/">Science</NavLink></li>
                        <li><NavLink to="/">Sports</NavLink></li>
                    </ul>
                </div>
        </nav>
    )
}

export default Nav;
