import { DraftInlineStyleType, EditorState, RichUtils } from "draft-js";

export const applyInlineStyle = (editorState: EditorState, updateEditorState: 
    (editorState: EditorState) => void,
     style: DraftInlineStyleType) => {
    updateEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };