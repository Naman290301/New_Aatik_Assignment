import "quill-mention";
import Quill from "quill";
import { useCallback } from "react";

const atValues = [
  { id: 1, value: "Naman Dwivedi" },
  { id: 2, value: "AAtik" },
  { id: 3, value: "Sahil" },
  { id: 4, value: "Aditya" },
  { id: 5, value: "Nikunj" },
  { id: 6, value: "Arpit" },
];
const hashValues = [
  { id: 3, value: "Fredrik Sundqvist 2" },
  { id: 4, value: "Patrik Sjölin 2" },
];

function QuillEditor({ editor_class }: { editor_class: string }) {
  const quillRef = useCallback((node: any) => {
    if (node) {
      const quill = new Quill("#editor", {
        modules: {
          mention: {
            allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
            mentionDenotationChars: ["@", "#"],
            source: function (
              searchTerm: any,
              renderList: any,
              mentionChar: any
            ) {
              let values;

              if (mentionChar === "@") {
                values = atValues;
              } else {
                values = hashValues;
              }

              if (searchTerm.length === 0) {
                renderList(values, searchTerm);
              } else {
                const matches = [];
                for (let i = 0; i < values.length; i++)
                  if (
                    ~values[i].value
                      .toLowerCase()
                      .indexOf(searchTerm.toLowerCase())
                  )
                    matches.push(values[i]);
                renderList(matches, searchTerm);
              }
            },
          },
        },
      });
    }
  }, []);

  return <div id="editor" className={editor_class} ref={quillRef}></div>;
}

export default QuillEditor;
