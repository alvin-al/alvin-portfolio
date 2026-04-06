"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  return (
    <div className="mb-3 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-50 px-4 py-1.5 border-b border-gray-200 flex items-center justify-between">
        <span className="text-sm text-gray-600 font-mono font-medium">
          {language.charAt(0).toUpperCase() + language.slice(1)}
        </span>
      </div>
      <SyntaxHighlighter
        language={language}
        style={github}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
          padding: "0.75rem",
          fontSize: "0.9rem",
          lineHeight: "1.5",
          backgroundColor: "#ffffff",
        }}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: "#858585",
          fontSize: "0.85rem",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}