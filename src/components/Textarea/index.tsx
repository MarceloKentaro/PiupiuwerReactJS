import React, {TextareaHTMLAttributes} from 'react';


import {TextareaComponent} from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    placeholder: string;
    className?: string;
    cols?: number;
    rows?: number;
    wrap?: string;
}

const Textarea: React.FC<TextareaProps> = ({placeholder,className, cols, rows, wrap, ...rest}) => {
    return(
        <TextareaComponent placeholder={placeholder} className={className} cols={cols} rows={rows} wrap={wrap} {...rest}></TextareaComponent>
    );
}

export default Textarea;