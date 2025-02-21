import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";

  
export const getEditorContentAsHTML = (editorRef: React.RefObject<EditorState>) => {
    if (!editorRef.current) return ;
    const contentState = editorRef.current.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    const html = draftToHtml(contentRaw);
    return html;

  };
  