import { Component } from 'react'
import { FaReact } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import './index.css'

class Header extends Component {
    render() {
        return (
            <div className='div-element' >
                <div className='header-left'>
                    <FaReact />
                </div>
                <div className="header-middile">
                    <h1>Logo</h1>
                </div>
                <div className='header-right'>
                    <span className="icon">
                        <CiSearch />
                    </span>
                    <span className="icon">
                        <CiHeart />
                    </span>
                    <span className="icon">
                        <IoBagOutline />
                    </span>
                    <span className="icon">
                        <VscAccount />
                    </span>
                </div>
            </div>
        )
    }
}

export default Header