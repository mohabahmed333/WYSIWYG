import { ToolbarButtonConfig } from "../../../types/toolbarButtonConfig.type";
import { alignmentButtons } from "./alignmentButtons";
import { blockFormattingButtons } from "./blockButtons";
import { inlineFormattingButtons } from "./inlineButtons";
import { otherButtons } from "./otherButtons";

export const toolbarButtonsConfig: ToolbarButtonConfig[] = [
  ...inlineFormattingButtons,
  ...blockFormattingButtons,
  ...alignmentButtons,
  ...otherButtons,
];
