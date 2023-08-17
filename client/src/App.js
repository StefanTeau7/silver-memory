import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" />
      <div className="App">
        <h1>Company Data Entry</h1>
        <CompanyForm />
        <h2>Upload Files</h2>
        <FileDropzone onFileUpload={handleFileUpload} />
      </div>
    </div>
  );
}

export default App;
