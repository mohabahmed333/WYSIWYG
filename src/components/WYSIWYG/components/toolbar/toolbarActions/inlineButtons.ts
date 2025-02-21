import { ToolbarButtonConfig } from "../../../types/toolbarButtonConfig.type";
import { applyInlineStyle } from "../../../utls/applInlineStyle";

export const inlineFormattingButtons: ToolbarButtonConfig[] = [
  {
    option: "bold",
    label: "Bold",
    action: (editorState, updateEditorState) => {
      applyInlineStyle(editorState, updateEditorState, "BOLD");
    },
  },
  {
    option: "italic",
    label: "Italic",
    action: (editorState, updateEditorState) => {
      applyInlineStyle(editorState, updateEditorState, "ITALIC");
    },
  },
  {
    option: "strikethrough",
    label: "strikethrough",
    action: (editorState, updateEditorState) => {
      applyInlineStyle(editorState, updateEditorState, "STRIKETHROUGH");
    },
  },
  {
    option: "underline",
    label: "underline",
    action: (editorState, updateEditorState) => {
      applyInlineStyle(editorState, updateEditorState, "UNDERLINE");
    },
  },
];
