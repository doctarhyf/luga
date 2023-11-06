import React from "react";
import FormNewWord from "./components/FormNewWord";
import FileUploader from "./components/FileUpload";

function AddWordOrCat() {
  return (
    <div className="max-w-[900px] mx-auto">
      <div className="text-3xl text-orange-500 mb-4 border-b py-4">
        Insert new word
      </div>

      <div className="my-4">
        {" "}
        Veuillez inserer un nouveau mot ou une nouvelle phrase!
      </div>

      <FormNewWord />
    </div>
  );
}

export default AddWordOrCat;
