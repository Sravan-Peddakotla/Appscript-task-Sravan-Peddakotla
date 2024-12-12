import {Component} from 'react'
import './index.css'

class Menu extends Component {
    render() {
        return (
            <div className="main-div-menu">
                <div className="left-space" ></div>
                <div className="menu-item">Shop</div>
                <div className="menu-item">Skills</div>
                <div className="menu-item">Stories</div>
                <div className="menu-item">About</div>
                <div className="menu-item">Contact Us</div>
            </div>
        )
    }
}

export default Menu