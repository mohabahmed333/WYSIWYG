import { EditorState } from "draft-js";
import { ToolbarOption } from "./toolbarOptions.type";

type UpdateEditorState = (editorState: EditorState) => void;

export  type ToolbarButtonConfig= {
  option: keyof ToolbarOption;
  label: string;
  action: (editorState: EditorState, updateEditorState: UpdateEditorState) => void;
}