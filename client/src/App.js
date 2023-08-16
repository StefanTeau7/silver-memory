import React from 'react';
import './App.css';
import CompanyForm from './components/CompanyForm';
import FileDropzone from './components/FileDropzone';
import { uploadFiles } from './services/api';

function App() {
  const handleFileUpload = async (files) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await uploadFiles(formData);
      console.log('Files uploaded:', response);
  } catch (error) {
      console.error('Error uploading files:', error);
  }
  };

  return (
    <div className="App">
      <h1>Company Data Entry</h1>
      <CompanyForm />
      <h2>Upload Files</h2>
      <FileDropzone onFileUpload={handleFileUpload} />
    </div>
  );
}

export default App;
