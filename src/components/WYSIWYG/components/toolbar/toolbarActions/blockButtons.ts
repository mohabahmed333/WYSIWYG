import { ToolbarButtonConfig } from "../../../types/toolbarButtonConfig.type";
import { applyBlockType } from "../../../utls/applyBlockType";

export const blockFormattingButtons: ToolbarButtonConfig[] = [
  {
    option: "blockquote",
    label: "Blockquote",
    action: (editorState, updateEditorState) => {
      applyBlockType(editorState, updateEditorState, "blockquote");
    },
  },
  {
    option: "codeBlock",
    label: "code Block",
    action: (editorState, updateEditorState) => {
      applyBlockType(editorState, updateEditorState, "code-block");
    },
  },
  {
    option: "orderedList",
    label: "ordered List",
    action: (editorState, updateEditorState) => {
      applyBlockType(editorState, updateEditorState, "ordered-list-item");
    },
  },
  {
    option: "unorderedList",
    label: "unordered List",
    action: (editorState, updateEditorState) => {
      applyBlockType(editorState, updateEditorState, "unordered-list-item");
    },
  },
];
