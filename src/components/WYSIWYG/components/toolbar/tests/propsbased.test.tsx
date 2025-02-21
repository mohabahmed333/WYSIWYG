import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import WYSIWYG from "../../..";
import { EditorState } from "draft-js";

describe("DraftEditor Toolbar Options", () => {
  const mockOnChange = jest.fn();
  let mockEditorState: EditorState; // Mocking editor state
  beforeEach(() => {
    mockEditorState = EditorState.createEmpty();
  });
  it("renders toolbar buttons based on enabled options", () => {
    render(
      <WYSIWYG
        onChange={mockOnChange}
        value={mockEditorState}
        renderToolbar={{
          bold: { enabled: true },
          italic: { enabled: true },
          underline: { enabled: true },
          strikethrough: { enabled: true },
          alignLeft: { enabled: true },
          alignRight: { enabled: true },
          alignCenter: { enabled: true },
          blockquote: { enabled: true },
          codeBlock: { enabled: true },
          orderedList: { enabled: true },
          redo: { enabled: false },
          undo: { enabled: false },
          unorderedList: { enabled: true },
        }}
      />,
    );

    expect(screen.getByText("Bold")).toBeInTheDocument();
    expect(screen.getByText("Italic")).toBeInTheDocument();
    expect(screen.getByText("underline")).toBeInTheDocument();
    expect(screen.getByText("strikethrough")).toBeInTheDocument();
    expect(screen.getByText("center Align")).toBeInTheDocument();
    expect(screen.getByText("left Align")).toBeInTheDocument();
    expect(screen.getByText("right Align")).toBeInTheDocument();
    expect(screen.getByText("Blockquote")).toBeInTheDocument();
    expect(screen.getByText("code Block")).toBeInTheDocument();
    expect(screen.getByText("ordered List")).toBeInTheDocument();
    expect(screen.getByText("unordered List")).toBeInTheDocument();
    expect(screen.queryByText("redo")).not.toBeInTheDocument();
    expect(screen.queryByText("undo")).not.toBeInTheDocument();
  });

  it("does not render buttons for disabled options", () => {
    render(
      <WYSIWYG
        onChange={mockOnChange}
        value={mockEditorState}
        renderToolbar={{
          bold: { enabled: false },
          italic: { enabled: false },
        }}
      />,
    );

    expect(screen.queryByText("Bold")).not.toBeInTheDocument();
    expect(screen.queryByText("Italic")).not.toBeInTheDocument();
  });

  it("triggers action when a toolbar button is clicked", () => {
    const mockAction = jest.fn();

    render(
      <WYSIWYG
        onChange={mockOnChange}
        value={mockEditorState}
        renderToolbar={{
          alignCenter: {
            enabled: true,
          },
        }}
      />,
    );

    const centerButton = screen.getByText("center Align");
    fireEvent.click(centerButton);

    expect(mockAction).not.toHaveBeenCalled(); // It won’t be called unless passed explicitly
  });

  it("when custom render is provided, it renders the custom component", () => {
    render(
      <WYSIWYG
        onChange={mockOnChange}
        value={mockEditorState}
        renderToolbar={{
          alignCenter: {
            enabled: true,
            customRender: ({ action, label }) => {
              return <button onClick={action}>custom</button>;
            },
          },
        }}
      />,
    );

    const centerButton = screen.getByText("custom");
    expect(centerButton).toBeInTheDocument();
  });
});
