import React, { useRef, useState, useEffect } from 'react';

import Button from './Button';
import './ImageUpload.css';

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const handleImageUpload = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'photos');

    try {
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/raul703/image/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      const image = await res.json();
      return image.secure_url;
    } catch (error) {
      console.log(error);
    }
  };

  const pickedHandler = async (event) => {
    const files = event.target.files;
    let pickedFile;
    let imageUrl;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
      imageUrl = await handleImageUpload(files[0]);
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    props.onInput(props.id, imageUrl, fileIsValid);
  };

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className='form-control'>
      <input
        id={props.id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        type='file'
        accept='.jpg,.png,.jpeg'
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className='image-upload__preview'>
          {previewUrl && <img src={previewUrl} alt='Preview' />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <Button type='button' onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
