export type ToolbarOption = {
  bold?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  italic?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  underline?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  strikethrough?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  blockquote?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  codeBlock?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  unorderedList?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  orderedList?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  alignLeft?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  alignCenter?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  alignRight?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  redo?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
  undo?: {
    enabled: boolean;
    customRender?: (props: {
      action: () => void;
      label: string;
    }) => React.JSX.Element;
  };
};
