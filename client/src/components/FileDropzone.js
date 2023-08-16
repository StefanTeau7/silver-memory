import React, { useRef } from 'react';

const FileDropzone = ({ onFileUpload }) => {
  const fileInputRef = useRef(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const files = [...event.dataTransfer.files];
    onFileUpload(files);
  };

  const handleFileInput = (event) => {
    const files = [...event.target.files];
    onFileUpload(files);
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  return (
      <div className="dropzone" onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>
        Drop files here or <button type="button" onClick={openFilePicker}>choose files</button>
        <input 
          ref={fileInputRef}
          type="file"
          style={{ display: 'none' }} 
          multiple 
          onChange={handleFileInput} 
        />
    </div>
  );
};

export default FileDropzone;
