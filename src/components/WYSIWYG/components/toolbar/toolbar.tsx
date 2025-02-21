import { ToolbarOption } from "../../types/toolbarOptions.type";
import ToolbarButton from "./ToolbarButton";
import { defaultToolbarOptions } from "../../constants";
import { EditorToolbarProps } from "../../types/editorToolbar.type";
import "./toolbar.css";
import { toolbarButtonsConfig } from "./toolbarActions/toolbarButtonsConfig";
const EditorToolbar = ({
  updateEditorState,
  editorState,
  renderToolbar = {},
  toolbarStyle = {},
  toolbarButtonsStyle,
  toolbarButtonsClassName,
}: EditorToolbarProps) => {
  const mergedToolbarOptions = { ...defaultToolbarOptions, ...renderToolbar };
  const getEnabledButtons = (option: string) => {
    return mergedToolbarOptions?.[option as keyof ToolbarOption]?.enabled;
  };
  return (
    <div
      className="toolbar-container"
      style={{
        ...toolbarStyle,
      }}
    >
      {toolbarButtonsConfig.map(({ option, label, action }) =>
        getEnabledButtons(option) ? (
          <ToolbarButton
            key={option}
            label={label}
            action={() => action(editorState, updateEditorState)}
            style={toolbarButtonsStyle}
            className={toolbarButtonsClassName}
            customRender={
              mergedToolbarOptions?.[option as keyof ToolbarOption]
                ?.customRender
            }
          />
        ) : null,
      )}
    </div>
  );
};

export default EditorToolbar;
