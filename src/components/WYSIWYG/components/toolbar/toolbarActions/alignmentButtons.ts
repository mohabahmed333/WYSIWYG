import { ToolbarButtonConfig } from "../../../types/toolbarButtonConfig.type";
import { changeTextAlignment } from "../../../utls/changeTextAlignment";

export const alignmentButtons: ToolbarButtonConfig[] = [
  {
    option: "alignLeft",
    label: "left Align",
    action: (editorState, updateEditorState) => {
      changeTextAlignment(editorState, updateEditorState, "left");
    },
  },
  {
    option: "alignCenter",
    label: "center Align",
    action: (editorState, updateEditorState) => {
      changeTextAlignment(editorState, updateEditorState, "center");
    },
  },
  {
    option: "alignRight",
    label: "right Align",
    action: (editorState, updateEditorState) => {
      changeTextAlignment(editorState, updateEditorState, "right");
    },
  },
];
