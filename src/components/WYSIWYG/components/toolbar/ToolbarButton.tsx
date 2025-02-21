import React, { HTMLAttributes, memo } from "react";

interface ToolbarButtonProps {
  label: string;
  action: () => void;
  customRender?: (props: {
    action: () => void;
    label: string;
  }) => React.JSX.Element;
  className?: HTMLAttributes<HTMLButtonElement>["className"] | null;
  style?: React.CSSProperties;
}

const ToolbarButton = ({
  label,
  action,
  customRender,
  className,
  style,
}: ToolbarButtonProps) => {
  const formattedLabel = label.toLowerCase().replace(/\s+/g, "-");
  return customRender ? (
    customRender({ action, label })
  ) : (
    <button
      data-testid={`toolbar-button-${formattedLabel}`}
      onClick={action}
      style={{
        margin: "2px",
        padding: "5px 10px",
        cursor: "pointer",
        ...style,
      }}
      title={label}
      className={`${className}`}
    >
      {label}
    </button>
  );
};

export default memo(ToolbarButton);
