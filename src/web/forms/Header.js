import React from 'react';

const Header = () => {
    return (
        <form>
        <div className="header">
            <a href="#default" className="logo">Sensor Emulator</a>
            <div className="header-right">
                <a className="active" href="#home">Simulator</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
		</form>
	)
}

export default Header;