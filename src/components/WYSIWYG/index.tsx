import { useState, useCallback, memo, useMemo } from "react";
import { EditorState } from "draft-js";
import DraftEditor from "./components/Editor/Editor";
import EditorToolbar from "./components/toolbar/toolbar";
import { EditorProps } from "./types/editor.type";
import "./index.css";

const WysiwygEditor = ({
  onChange,
  value,
  renderToolbar,
  editorStyle = {},
  toolbarStyle = {},
  editorClassName,
  toolbarButtonsClassName,
  toolbarButtonsStyle = {},
}: EditorProps) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const updateEditorState = useCallback(
    (newState: EditorState) => {
      if (onChange) {
        onChange(newState);
      } else {
        setEditorState(newState);
      }
    },
    [onChange],
  );

  const EditorValue = value || editorState;

  const EditorOnChange = useMemo(
    () => (value ? onChange : updateEditorState),
    [value, onChange, updateEditorState],
  );

  return (
    <div
      style={editorStyle}
      className={`editor-container ${editorClassName ?? ""}`}
    >
      <EditorToolbar
        editorState={EditorValue}
        updateEditorState={updateEditorState}
        renderToolbar={renderToolbar}
        toolbarStyle={toolbarStyle}
        toolbarButtonsClassName={toolbarButtonsClassName}
        toolbarButtonsStyle={toolbarButtonsStyle}
      />

      <DraftEditor value={EditorValue} onChange={EditorOnChange} />
    </div>
  );
};

export default memo(WysiwygEditor, (prevProps, nextProps) => {
  return (
    prevProps.value === nextProps.value &&
    prevProps.onChange === nextProps.onChange
  );
});
