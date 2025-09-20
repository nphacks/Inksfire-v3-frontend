import type { RawDraftContentState } from "draft-js";

export const screenplayElementsToRaw = (elements: any[]): RawDraftContentState => {
  const blocks: any[] = [];

  elements.forEach((el, elIndex) => {
    switch (el.type) {
      case "scene":
        // Add scene slugline
        if (el.slugline && el.slugline.location) {
          const loc = el.slugline.location;
          const parts = [loc.place, loc.location_title, loc.specific_location, loc.time].filter(Boolean);
          blocks.push({
            key: `scene-${elIndex}-slugline`,
            text: parts.join(" - "),
            type: "slugline",
            depth: 0,
            inlineStyleRanges: [],
            entityRanges: [],
            data: {},
          });
        }

        // Add scene_information
        if (Array.isArray(el.scene_information)) {
          el.scene_information.forEach((item: any, infoIndex: number) => {
            if (item.action) {
              blocks.push({
                key: `scene-${elIndex}-action-${infoIndex}`,
                text: item.action.action,
                type: "action",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              });
            }
            if (item.dialogue) {
              // Character
              blocks.push({
                key: `scene-${elIndex}-character-${infoIndex}`,
                text: item.dialogue.character,
                type: "character",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              });
              // Parenthetical
              if (item.dialogue.paranthetical) {
                blocks.push({
                  key: `scene-${elIndex}-parenthetical-${infoIndex}`,
                  text: item.dialogue.paranthetical,
                  type: "parenthetical",
                  depth: 0,
                  inlineStyleRanges: [],
                  entityRanges: [],
                  data: {},
                });
              }
              // Speech
              blocks.push({
                key: `scene-${elIndex}-dialogue-${infoIndex}`,
                text: item.dialogue.speech,
                type: "dialogue",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {},
              });
            }
          });
        }
        break;

      case "transition":
      case "montage":
      case "flashback":
      case "text_on_screen":
      case "text":
        blocks.push({
          key: `${el.type}-${elIndex}`,
          text: el.transition || el.montage || el.text || "",
          type: el.type,
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        });
        break;

      default:
        // fallback
        blocks.push({
          key: `text-${elIndex}`,
          text: el.text || "",
          type: "text",
          depth: 0,
          inlineStyleRanges: [],
          entityRanges: [],
          data: {},
        });
    }
  });

  return { blocks, entityMap: {} };
};
