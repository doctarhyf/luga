"use client";
import { sb } from "@/app/db/sb";
import React, { useState } from "react";

function FileUploader() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    const { data, error } = await sb.storage
      .from("/luga")
      .upload(`/${selectedFile.name}`, selectedFile);

    if (error) {
      console.error("Error uploading file:", error.message);
    } else {
      console.log("File uploaded successfully:", data);
    }
  };

  return (
    <div>
      <input type="file" accept=".jpg, .png" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>
      {selectedFile && <p>Selected File: {selectedFile.name}</p>}
    </div>
  );
}

export default FileUploader;
