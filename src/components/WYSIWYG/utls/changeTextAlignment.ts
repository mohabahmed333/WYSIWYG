import { EditorState, Modifier } from "draft-js";
type alignment = 'left' | 'center' | 'right';

export const changeTextAlignment = (editorState: EditorState, updateEditorState:
   (editorState: EditorState) => void, alignment:alignment) => {
    const selection = editorState.getSelection();
    const contentState = editorState.getCurrentContent();
    const blockKey = selection.getStartKey();
    const block = contentState.getBlockForKey(blockKey);
  
    const newContentState = Modifier.setBlockData(
      contentState,
      selection,
      block.getData().set('textAlignment', alignment)
    );
  
    updateEditorState(EditorState.push(editorState, newContentState, 'change-block-data'));
  };
  