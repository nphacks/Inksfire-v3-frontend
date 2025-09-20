
export const blockTypeMap: Record<string, string> = {
  slugline: "slugline-format",
  action: "action-format",
  keyword: "keyword-format",
  character: "character-format",
  parenthetical: "parenthetical-format",
  dialogue: "dialogue-format",
  transition: "transition-format",
  montage: "montage-format",
  flashback: "flashback-format",
  text_on_screen: "text_on_screen-format",
};


export let screenplay_test = [
    {
        "id": "scene_001",
        "type": "scene",
        "slugline": {
            "location": {
                "place": "INT.",
                "location_title": "COFFEE SHOP",
                "specific_location": "corner table by the window",
                "time": "MORNING"
            }
        },
        "scene_information": [
            {
                "action": {
                    "action": "Sunlight spills through the window, illuminating a half-empty coffee cup. JAMES stirs his drink absentmindedly."
                }
            },
            {
                "dialogue": {
                    "character": "JAMES",
                    "paranthetical": "(sighing)",
                    "speech": "I can’t believe she didn’t show up again."
                }
            },
            {
                "action": {
                    "action": "SARAH enters, scanning the room until her eyes meet James. She waves hesitantly and approaches."
                }
            },
            {
                "dialogue": {
                    "character": "SARAH",
                    "paranthetical": "(nervous)",
                    "speech": "Hey… sorry I’m late. Traffic was a nightmare."
                }
            },
            {
                "action": {
                    "action": "JAMES gestures to the chair across from him. The coffee shop buzzes softly around them.",
                }
            },
            {
                "dialogue": {
                    "character": "JAMES",
                    "paranthetical": "(trying to smile)",
                    "speech": "It’s fine. Really. Just… I didn’t think you’d come at all."
                }
            },
            {
                "action": {
                    "action": "SARAH sits down slowly, glancing at the barista. She fidgets with her bag zipper."
                }
            },
            {
                "dialogue": {
                    "character": "SARAH",
                    "paranthetical": "(softly)",
                    "speech": "James, I… I need to tell you something."
                }
            }
        ]
    },
    {
        "id": "transition_001",
        "type": "transition",
        "transition": "CUT TO:"
    },
    {
        "id": "scene_002",
        "type": "scene",
        "slugline": {
            "location": {
                "place": "EXT.",
                "location_title": "PARK",
                "specific_location": "empty playground",
                "time": "AFTERNOON"
            }
        },
        "scene_information": [
            {
                "action": {
                    "action": "Leaves swirl in the wind as MICHAEL jogs along the path. He slows down when he sees James and Sarah sitting on a bench.",
                    "keywords": ["MICHAEL jogging", "wind"]
                }
            },
            {
                "dialogue": {
                    "character": "MICHAEL",
                    "paranthetical": "(calling out)",
                    "speech": "Hey! Didn’t expect to see you two here."
                }
            },
            {
                "action": {
                    "action": "James looks up, squinting, while Sarah forces a smile. Michael jogs closer, breathing heavily.",
                    "keywords": ["surprise", "approach"]
                }
            },
            {
                "dialogue": {
                    "character": "JAMES",
                    "paranthetical": "(uneasy)",
                    "speech": "Michael… this is a bit awkward."
                }
            },
            {
                "dialogue": {
                    "character": "SARAH",
                    "paranthetical": "(hesitant)",
                    "speech": "We were just… talking."
                }
            },
            {
                "action": {
                    "action": "MICHAEL sits on the other side of the bench, ignoring the tension. He throws a small stone into the pond, watching it ripple.",
                    "keywords": ["MICHAEL", "pond"]
                }
            },
            {
                "dialogue": {
                    "character": "MICHAEL",
                    "paranthetical": "(smirking)",
                    "speech": "Talking, huh? Looks more like plotting to me."
                }
            },
            {
                "action": {
                    "action": "A gust of wind lifts Sarah’s hair into her face. She brushes it back, glancing between James and Michael.",
                    "keywords": ["tension", "wind"]
                }
            },
            {
                "dialogue": {
                    "character": "SARAH",
                    "paranthetical": "(firmly)",
                    "speech": "It’s not like that. You don’t understand."
                }
            }
        ]
    },
    {
        "id": "transition_002",
        "type": "transition",
        "transition": "DISSOLVE TO:"
    },
    {
        "id": "scene_003",
        "type": "scene",
        "slugline": {
            "location": {
                "place": "INT.",
                "location_title": "APARTMENT",
                "specific_location": "living room with scattered papers",
                "time": "NIGHT"
            }
        },
        "scene_information": [
            {
                "action": {
                    "action": "The room is dimly lit. James paces while Sarah sits on the couch, head in hands. Michael leans against the doorframe.",
                    "keywords": ["dim light", "scattered papers"]
                }
            },
            {
                "dialogue": {
                    "character": "JAMES",
                    "paranthetical": "(frustrated)",
                    "speech": "I don’t know what to do anymore. Every time I think we’re okay…"
                }
            },
            {
                "action": {
                    "action": "Sarah stands, moving closer to James, her voice trembling.",
                    "keywords": ["movement", "tension"]
                }
            },
            {
                "dialogue": {
                    "character": "SARAH",
                    "paranthetical": "(pleading)",
                    "speech": "James, I’m trying. I really am. But you have to let me explain."
                }
            },
            {
                "action": {
                    "action": "MICHAEL steps forward, placing a hand on James’ shoulder. He looks at both of them with quiet concern.",
                    "keywords": ["MICHAEL", "support"]
                }
            },
            {
                "dialogue": {
                    "character": "MICHAEL",
                    "paranthetical": "(calmly)",
                    "speech": "Sometimes the hardest part isn’t choosing sides… it’s choosing to listen."
                }
            },
            {
                "action": {
                    "action": "James exhales, tension slowly leaving his shoulders. Sarah reaches for his hand. Michael smiles faintly, then moves to the kitchen.",
                    "keywords": ["resolution", "gesture"]
                }
            },
            {
                "dialogue": {
                    "character": "JAMES",
                    "paranthetical": "(softly)",
                    "speech": "Okay… let’s talk."
                }
            }
        ]
    }
  ]