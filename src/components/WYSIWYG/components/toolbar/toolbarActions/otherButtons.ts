import { ToolbarButtonConfig } from "../../../types/toolbarButtonConfig.type";
import { redoAction, undoAction } from "../../../utls/reudo";

export const otherButtons: ToolbarButtonConfig[] = [
  {
    option: "undo",
    label: "undo",
    action: (editorState, updateEditorState) => {
      undoAction(editorState, updateEditorState);
    },
  },
  {
    option: "redo",
    label: "redo",
    action: (editorState, updateEditorState) => {
      redoAction(editorState, updateEditorState);
    },
  },
];
