import { EditorState, convertToRaw } from "draft-js";

export const parseEditorToScreenplay = (editorState: EditorState) => {
  const raw = convertToRaw(editorState.getCurrentContent());
  const screenplay: any[] = [];

  let currentScene: any = null;
  let lastDialogue: any = null;

  raw.blocks.forEach((block) => {
    switch (block.type) {
      case "slugline":
        if (currentScene) {
            screenplay.push(currentScene);
        }

        const parts = block.text.split(" - ").map(p => p.trim());
        const place = parts[0] || "";
        const location_title = parts[1] || "";
        let specific_location = "";
        let time = "";

        if (parts.length === 3) {
            // specific_location missing
            specific_location = "";
            time = parts[2] || "";
        } else {
            specific_location = parts[2] || "";
            time = parts[3] || "";
        }

        currentScene = {
            type: "scene",
            slugline: {
            location: {
                place,
                location_title,
                specific_location,
                time,
            }
            },
            scene_information: [],
        };
        lastDialogue = null;
        break;


      case "action":
        if (!currentScene) {
          // fallback: create a scene if none exists
          currentScene = { type: "scene", scene_information: [], slugline: { location: { text: "" } } };
        }
        currentScene.scene_information.push({ action: { action: block.text } });
        lastDialogue = null;
        break;

      case "character":
        if (!currentScene) {
          currentScene = { type: "scene", scene_information: [], slugline: { location: { text: "" } } };
        }
        lastDialogue = { dialogue: { character: block.text, paranthetical: "", speech: "" } };
        currentScene.scene_information.push(lastDialogue);
        break;

      case "parenthetical":
        if (lastDialogue && lastDialogue.dialogue) {
          lastDialogue.dialogue.paranthetical = block.text;
        }
        break;

      case "dialogue":
        if (lastDialogue && lastDialogue.dialogue) {
          lastDialogue.dialogue.speech = block.text;
        }
        break;

      case "transition":
        case "montage":
        case "flashback":
        case "text_on_screen":
        case "text":
        if (currentScene) {
            // Close current scene before pushing standalone element
            screenplay.push(currentScene);
            currentScene = null;
        }
        // Push element in the order it appears
        screenplay.push({ type: block.type, text: block.text });
        lastDialogue = null;
        break;

      default:
        // fallback as text
        screenplay.push({ type: "text", text: block.text });
        lastDialogue = null;
        break;
    }
  });

  // Push the last scene if exists
  if (currentScene) {
    screenplay.push(currentScene);
  }

  return screenplay;
};
