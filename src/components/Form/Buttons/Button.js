import React from 'react';
import PropTypes from 'prop-types';
import * as reactstrap from 'reactstrap';
import { color, size } from "./constants"; 

export default function Button({ name, color, outline, size, disabled, ...props }) {
    return (
        <reactstrap.Button 
            color={color}
            outline={outline}
            disabled={disabled}
            size={size}
            { ...props }
        >
            {name}
        </reactstrap.Button>
    )
}

Button.size = size;
Button.color = color;

Button.propTypes = {
    name: PropTypes.string.isRequired,
    props: PropTypes.object,
    color: PropTypes.oneOf(Object.keys(color)),
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(Object.keys(size))
}