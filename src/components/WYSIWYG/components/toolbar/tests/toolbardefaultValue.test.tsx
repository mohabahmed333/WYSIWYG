import { render, fireEvent, screen } from "@testing-library/react";
import { EditorState } from "draft-js";
import EditorToolbar from "../toolbar";
import { applyInlineStyle } from "../../../utls/applInlineStyle";
import { applyBlockType } from "../../../utls/applyBlockType";
import { changeTextAlignment } from "../../../utls/changeTextAlignment";
import { redoAction, undoAction } from "../../../utls/reudo";

jest.mock("../../../utls/applInlineStyle");
jest.mock("../../../utls/applyBlockType");
jest.mock("../../../utls/changeTextAlignment");
jest.mock("../../../utls/reudo");
describe("Toolbar Component check default", () => {
  let mockEditorState: EditorState;
  let mockUpdateEditorState: () => void;

  beforeEach(() => {
    mockEditorState = EditorState.createEmpty();
    mockUpdateEditorState = jest.fn();
  });

  it("should render the default buttons", () => {
    render(
      <EditorToolbar
        editorState={mockEditorState}
        updateEditorState={mockUpdateEditorState}
      />,
    );

    expect(screen.getByTestId("toolbar-button-bold")).toBeInTheDocument();
    expect(screen.getByTestId("toolbar-button-italic")).toBeInTheDocument();
    expect(screen.getByTestId("toolbar-button-underline")).toBeInTheDocument();
  });
});
describe("DraftEditor Toolbar Options", () => {
  let mockEditorState: EditorState;
  let mockUpdateEditorState: (e: EditorState) => void;

  beforeEach(() => {
    mockEditorState = EditorState.createEmpty();
    mockUpdateEditorState = jest.fn();
  });
  it("should call applyInlineStyle when buttons are clicked", () => {
    render(
      <EditorToolbar
        editorState={mockEditorState}
        updateEditorState={mockUpdateEditorState}
        renderToolbar={{
          bold: { enabled: true },
          italic: { enabled: true },
          underline: { enabled: true },
          strikethrough: { enabled: true },
        }}
      />,
    );

    const boldButton = screen.getByTestId("toolbar-button-bold");
    fireEvent.click(boldButton);

    expect(applyInlineStyle).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "BOLD",
    );

    const strikethrough = screen.getByTestId("toolbar-button-strikethrough");
    fireEvent.click(strikethrough);

    expect(applyInlineStyle).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "STRIKETHROUGH",
    );
    const italicButton = screen.getByTestId("toolbar-button-italic");
    fireEvent.click(italicButton);

    expect(applyInlineStyle).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "ITALIC",
    );

    const underlineButton = screen.getByTestId("toolbar-button-underline");
    fireEvent.click(underlineButton);

    expect(applyInlineStyle).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "UNDERLINE",
    );
  });

  it("should call applyBlockType when block buttons are clicked", () => {
    render(
      <EditorToolbar
        editorState={mockEditorState}
        updateEditorState={mockUpdateEditorState}
        renderToolbar={{
          blockquote: { enabled: true },
          codeBlock: { enabled: true },
          orderedList: { enabled: true },
          unorderedList: { enabled: true },
        }}
      />,
    );

    const blockquoteButton = screen.getByTestId("toolbar-button-blockquote");
    fireEvent.click(blockquoteButton);
    expect(blockquoteButton).toBeInTheDocument();

    expect(applyBlockType).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "blockquote",
    );

    const codeBlockButton = screen.getByTestId("toolbar-button-code-block");
    fireEvent.click(codeBlockButton);

    expect(applyBlockType).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "code-block",
    );

    const orderedListButton = screen.getByTestId("toolbar-button-ordered-list");
    fireEvent.click(orderedListButton);

    expect(applyBlockType).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "ordered-list-item",
    );

    const unorderedListButton = screen.getByTestId(
      "toolbar-button-unordered-list",
    );
    fireEvent.click(unorderedListButton);

    expect(applyBlockType).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "unordered-list-item",
    );
  });
  it("should call for alignments buttons when clicked", () => {
    render(
      <EditorToolbar
        editorState={mockEditorState}
        updateEditorState={mockUpdateEditorState}
        renderToolbar={{
          alignCenter: { enabled: true },
          alignLeft: { enabled: true },
          alignRight: { enabled: true },
        }}
      />,
    );

    const alignCenterButton = screen.getByTestId("toolbar-button-center-align");
    fireEvent.click(alignCenterButton);
    expect(changeTextAlignment).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "center",
    );

    const alignLeftButton = screen.getByTestId("toolbar-button-left-align");
    fireEvent.click(alignLeftButton);
    expect(changeTextAlignment).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "left",
    );

    const alignRightButton = screen.getByTestId("toolbar-button-right-align");
    fireEvent.click(alignRightButton);
    expect(changeTextAlignment).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
      "right",
    );
  });

  it("should call other buttons when clicked", () => {
    render(
      <EditorToolbar
        editorState={mockEditorState}
        updateEditorState={mockUpdateEditorState}
        renderToolbar={{
          undo: { enabled: true },
          redo: { enabled: true },
        }}
      />,
    );
    const unDoButton = screen.getByTestId("toolbar-button-undo");
    fireEvent.click(unDoButton);
    expect(undoAction).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
    );
    const reDoButton = screen.getByTestId("toolbar-button-redo");
    fireEvent.click(reDoButton);
    expect(redoAction).toHaveBeenCalledWith(
      mockEditorState,
      mockUpdateEditorState,
    );
  });
});
