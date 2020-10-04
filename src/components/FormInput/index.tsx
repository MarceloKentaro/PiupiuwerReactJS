/* Componente do Input do Formulário*/
import React, {InputHTMLAttributes} from 'react';


import { InputComponent } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    type?: string;
    placeholder: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({type, placeholder,className, ...rest}) => {
    return(
        <InputComponent type={type} placeholder={placeholder} className={className} {...rest}></InputComponent>
    );
}

export default Input;