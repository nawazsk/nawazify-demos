import React, {useState} from 'react';

const UploadImagePreview = () => {
    const [src, setSrc] = useState('');
    

    const handleChange = (event) => {

        let file = event.target.files[0];
        
        setSrc(URL.createObjectURL(file));

    }
    return (
        <div>
            <h1>Upload Image Preview</h1>
           
            <input type="file" onChange={handleChange}/>
            <br/>
            {
                src.length ? <img id="img" src={src} alt="uploaded"/>: ''
            }
            
        </div>
    )
}

export default UploadImagePreview;