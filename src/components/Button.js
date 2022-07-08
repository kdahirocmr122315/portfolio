import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn-primary', 'btn-ouline'];
const SIZE = ['btn-regular', 'btnbig'];

export const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];
        
};