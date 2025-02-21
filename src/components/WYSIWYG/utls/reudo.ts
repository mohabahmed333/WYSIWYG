import { EditorState } from "draft-js";

 
export const undoAction = (editorState: EditorState, updateEditorState: 
    (editorState: EditorState) => void) => {
    updateEditorState(EditorState.undo(editorState));
  };
  
  export const redoAction = (editorState: EditorState, updateEditorState:
     (editorState: EditorState) => void) => {
    updateEditorState(EditorState.redo(editorState));
  };
  