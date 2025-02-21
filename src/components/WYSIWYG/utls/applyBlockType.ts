import { EditorState, RichUtils } from "draft-js";
import { CoreDraftBlockType } from "../types/coreDraftBlock.ype";

export const applyBlockType = (
  editorState: EditorState,
  updateEditorState: (editorState: EditorState) => void,
  blockType: CoreDraftBlockType,
) => {
  updateEditorState(RichUtils.toggleBlockType(editorState, blockType));
};
