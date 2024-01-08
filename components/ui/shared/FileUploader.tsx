import React, { Dispatch, SetStateAction } from "react";

type FileUpLoadProps = {
  imageUrl: string;
  onFieldChange: (value: string) => void;
  setFiles: Dispatch<SetStateAction<File[]>>;
};

const FileUploader = ({
  imageUrl,
  onFieldChange,
  setFiles
}: FileUpLoadProps) => {
  return <div></div>;
};

export default FileUploader;
