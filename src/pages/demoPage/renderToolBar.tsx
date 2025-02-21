import { ToolbarOption } from "../../components/WYSIWYG/types/toolbarOptions.type";

export const renderToolbar: ToolbarOption = {
  alignCenter: {
    enabled: true,
    customRender: ({ action, label }) => {
      return <button onClick={action}>Center</button>;
    },
  },
  alignLeft: {
    enabled: true,
  },
  alignRight: {
    enabled: true,
  },
  bold: {
    enabled: true,
  },
  italic: {
    enabled: true,
  },
  redo: {
    enabled: true,
  },
  strikethrough: {
    enabled: true,
  },

  blockquote: {
    enabled: true,
  },
  orderedList: {
    enabled: true,
  },
  codeBlock: {
    enabled: true,
  },
  underline: {
    enabled: true,
  },
  unorderedList: {
    enabled: true,
  },
  undo: {
    enabled: true,
  },
};
