import React, {ImgHTMLAttributes} from 'react';


import { ImgComponent } from './styles';

interface ImgProps extends ImgHTMLAttributes<HTMLImageElement>{
    src: string;
    className?: string;
}

const Image: React.FC<ImgProps> = ({src, className}) => {
    return(
        <ImgComponent src={src} className={className}></ImgComponent>
    );
}

export default Image;