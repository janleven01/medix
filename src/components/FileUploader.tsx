"use client";

import { convertFileToUrl } from "@/lib/utils";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

type FileUploaderProps = {
  files: File[] | undefined;
  onChange: (files: File[]) => void;
};

const FileUploader = ({ files, onChange }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="flex-center flex-col gap-4 text-sm border border-dashed rounded-md py-[3.25rem]"
    >
      <input {...getInputProps()} />
      {files && files?.length > 0 ? (
        <Image
          src={convertFileToUrl(files[0])}
          alt="uploaded image"
          width={1000}
          height={1000}
          className="max-h-[400px] overflow-hidden object-cover"
        />
      ) : (
        <>
          <Image
            src="/assets/icons/upload.svg"
            alt="upload"
            width={40}
            height={40}
            className="rounded-full w-12 h-12 p-2 bg-secondary"
          />
          <div className="flex flex-col gap-2 items-center text-muted-foreground">
            <p>
              <span className="text-green-400">Click to upload </span>
              or drag and drop
            </p>
            <p className="text-xs">SVG, PING, JPG or Gif (max 800x400)</p>
          </div>
        </>
      )}
    </div>
  );
};

export default FileUploader;
