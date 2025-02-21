WYSIWYG Editor Component
A reusable WYSIWYG (What You See Is What You Get) Editor built using React and Draft.js. Supports both controlled and uncontrolled modes and allows for toolbar customization.
## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
 
### `yarn build`

Features Implemented
✅ Supports Controlled & Uncontrolled Modes
✅ Includes Bold, Italic, and Underline formatting
✅ Customizable Toolbar with renderToolbar prop
✅ TypeScript Support for better maintainability
✅ Unit tests for toolbar actions

✅ Controlled Mode Example
In controlled mode, the editor's state is managed externally, and changes are handled via the onChange prop.
import { useState } from "react";
import Wysiwyg from "./components/WYSIWYG";

const ControlledEditor = () => {
const [editorState, setEditorState] = useState(null);

return (
<Wysiwyg
value={editorState}
onChange={setEditorState}
editorStyle={{ border: "1px solid #ccc", padding: "10px" }}
/>
);
};

export default ControlledEditor;

✅ Uncontrolled Mode Example
In uncontrolled mode, the editor manages its own state.

import WysiwygEditor from "./components/WYSIWYG";

const UncontrolledEditor = () => {
return <WysiwygEditor />;
};

export default UncontrolledEditor;

📌 Contribution
Want to contribute? Follow these steps:

Fork the repository.
Create a new branch (feature/your-feature).
Make changes and commit.
Push to your branch and submit a pull request.
