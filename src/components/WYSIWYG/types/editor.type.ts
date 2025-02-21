import { EditorState } from "draft-js";
import { ToolbarOption } from "./toolbarOptions.type";
import { HTMLAttributes } from "react";
import { EditorToolbarProps } from "./editorToolbar.type";

type ControlledProps = {
  onChange: (editorState: EditorState) => void;
  value: EditorState;
};

type UncontrolledProps = {
  onChange?: never;
  value?: never;
};

type AdditionalProps = {
  renderToolbar?: ToolbarOption;
  editorStyle?: React.CSSProperties;
  toolbarStyle?: React.CSSProperties;
  editorClassName?: HTMLAttributes<HTMLDivElement>["className"];
  toolbarButtonsClassName?: EditorToolbarProps["toolbarButtonsClassName"];
  toolbarButtonsStyle?: EditorToolbarProps["toolbarButtonsStyle"];
};

export type EditorProps = (ControlledProps | UncontrolledProps) &
  AdditionalProps;
