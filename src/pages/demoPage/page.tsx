import { EditorState } from "draft-js";
import { useCallback, useState, useTransition } from "react";
import WYSIWYG from "../../components/WYSIWYG";
import { renderToolbar } from "./renderToolBar";
import "./index.css";
const DemoPage = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [loading, call] = useTransition();
  const onChange = useCallback((e: EditorState) => {
    setEditorState(e);
  }, []);

  const ToDataBase = async () => {
    return call(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          console.log("successfully Add Data To Data Base ", editorState);
          resolve(null);
        }, 5000);
      });
    });
  };
  return (
    <>
      {/* {controlled mode} */}

      <WYSIWYG
        onChange={onChange}
        value={editorState}
        renderToolbar={{ ...renderToolbar }}
        editorStyle={{
          width: "600px",
          height: "200px",
        }}
      />
      <button disabled={loading} className="save" onClick={ToDataBase}>
        {loading ? "loading" : "save"}{" "}
      </button>
      {/* {unControlled mode} */}
      <WYSIWYG />
    </>
  );
};

export default DemoPage;
