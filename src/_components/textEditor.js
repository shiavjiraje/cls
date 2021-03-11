import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function TextEditor({ onChange, value }) {
  const handleEditorChange = (editor) => onChange(editor);
  return (
    <React.Fragment>
      <Editor
        //apiKey="z2fvgb12fid20qablvolrzqahufdng4v0sjz28p7hxhp9w9u"
        //cloudChannel="dev"
        init={{
          selector: "textarea",
          plugins: "link image textpattern lists "
        }}
        value={value}
        onEditorChange={handleEditorChange}
      />
    </React.Fragment>
  );
}

export default TextEditor;
