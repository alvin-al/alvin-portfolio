import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

export default function MyEditor() {
  const [value, setValue] = useState("");

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"],
    ],
  };

  return (
    <ReactQuill
      theme='bubble'
      modules={modules}
      value={value}
      onChange={setValue}
      className='text-white px-6 bg-transparent border-b-2 border-gray-400 min-h-52 w-full placeholder:border-gray-400 focus:outline-none'
    />
  );
}
