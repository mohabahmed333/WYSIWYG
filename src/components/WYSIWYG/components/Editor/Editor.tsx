import { ContentBlock, Editor, EditorState } from "draft-js";
import { memo, useCallback } from "react";
import "./DraftEditor.css";
const DraftEditor = ({
  value,
  onChange,
}: {
  value: EditorState;
  onChange: (e: EditorState) => void;
}) => {
  const blockStyleFn = useCallback((contentBlock: ContentBlock) => {
    const data = contentBlock.getData();
    const alignment = data.get("textAlignment");
    if (alignment) {
      return `align-${alignment}`;
    }
    return "";
  }, []);
  return (
    <Editor
      editorState={value}
      onChange={onChange}
      blockStyleFn={blockStyleFn}
    />
  );
};

export default memo(DraftEditor);
