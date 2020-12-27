import React from 'react';
import '../ImageListComponent.css';
import ImageCardComponent from './ImageCardComponent';

const ImageListComponent  = (props) =>{
    const images = props.images.map((image)=>{
        return <ImageCardComponent key = {image.id} image={image}/>;
    });
    
    return (
        <div className = "image-list">{images}</div>
    );
};

export default ImageListComponent;