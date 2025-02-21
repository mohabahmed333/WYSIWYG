import { EditorState } from "draft-js";
import { ToolbarOption } from "./toolbarOptions.type";
import { HTMLAttributes } from "react";

export type EditorToolbarProps = {
  updateEditorState: (editorState: EditorState) => void;
  editorState: EditorState;
  renderToolbar?: ToolbarOption;
  toolbarStyle?: React.CSSProperties;
  toolbarButtonsStyle?: React.CSSProperties | undefined;
  toolbarButtonsClassName?:
    | HTMLAttributes<HTMLButtonElement>["className"]
    | null;
};
