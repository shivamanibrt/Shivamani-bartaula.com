import React from 'react';
import { NavigationBarFile } from './NavigationBarFile';
import { FooterFile } from './FooterFile';
import { Row } from "react-bootstrap";

export const Layout = ({ children, isDarkMode, handleThemeChange }) => {
    return (
        <div>
            <NavigationBarFile isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
            <Row className="main" >{children}</Row>
            <FooterFile isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />
        </div>
    )
};
