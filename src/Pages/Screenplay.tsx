import { useNavigate } from "react-router-dom";
import { convertFromRaw, Editor, EditorState, RichUtils } from "draft-js";
import "./Styles/Screenplay.css"
import { useEffect, useRef, useState } from "react";
import { FiPlay } from "react-icons/fi";
import { MdCallToAction } from "react-icons/md";
import { LuWholeWord } from "react-icons/lu";
import { CgGhostCharacter } from "react-icons/cg";
import { TooltipButton } from "./Components/TooltipButton";
import { PiBracketsRoundBold } from "react-icons/pi";
import { GiConversation } from "react-icons/gi";
import { TbTransitionRight, TbTextRecognition } from "react-icons/tb";
import { LiaColumnsSolid } from "react-icons/lia";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";

import { blockTypeMap, screenplay_test } from "./Models/Screenplay";
import { screenplayElementsToRaw } from "./Utils/screenplayElementsToRaw";
import { parseEditorToScreenplay } from "./Utils/parseEditorToScreenplay";

export default function Screenplay() {
  const navigate = useNavigate();

  const [screenplayElements, setScreenplayElements] = useState(screenplay_test)
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("Screenplay Title");
  const [titleEditing, setTitleEditing] = useState(false);
  const [showSettingsPopup, setShowSettingsPopup] = useState(false);
  
  // Screenplay metadata state
  const [screenplayTitle, setScreenplayTitle] = useState("");
  const [writtenBy, setWrittenBy] = useState("");
  const [basedOn, setBasedOn] = useState("");
  const [contact, setContact] = useState("");
  const [draftDate, setDraftDate] = useState("");

  const editorRef = useRef<Editor>(null);

  const handleLineFormat = (format: string) => {
    if (blockTypeMap[format]) {
      setEditorState(RichUtils.toggleBlockType(editorState, format));
    }
  };

  const blockStyleFn = (contentBlock: any): string => {
    const type = contentBlock.getType();
    return blockTypeMap[type] || "";
  };

  useEffect(() => {
    editorRef.current?.focus();
  }, []);

  useEffect(() => {
    if (screenplayElements.length > 0) {
      const rawState = screenplayElementsToRaw(screenplayElements);
      const contentState = convertFromRaw(rawState);
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const handleSave = () => {
    const updatedScreenplay = parseEditorToScreenplay(editorState);
    console.log("Parsed screenplay:", updatedScreenplay);
  };

  const handleSettingsSave = () => {
    console.log("Screenplay Settings:", {
      title: screenplayTitle,
      writtenBy,
      basedOn,
      contact,
      draftDate
    });
    setShowSettingsPopup(false);
  };


  return (
    <>
      <div className="app-page">
        <div className="screenplay-header">
          <div>
            <button style={{marginLeft: "12px"}}>Back</button> 
            <div
              onClick={() => setTitleEditing(true)}
              className="screenplay-title-display"
            >
              {titleEditing ? (
                <input
                  autoFocus
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  onBlur={() => setTitleEditing(false)}
                  onKeyDown={(e) => e.key === "Enter" && setTitleEditing(false)}
                  className="screenplay-title-input"
                />
              ) : (
                title
              )}
            </div>
          </div>
          <div className="screenplay-header-buttons" style={{marginRight: "12px"}}>
              <button>AI Help</button>
              <button onClick={handleSave}>Save Draft</button>
              <button onClick={handleSave}>Submit Draft</button>
              <button onClick={handleSave}>Lock It</button>
              <button onClick={() => setShowSettingsPopup(true)}>
                <FiSettings />
              </button>
            </div>
        </div>
        <div className="screenplay-content-editor">
          <div className="screenplay-content-toolbar">
              <TooltipButton tooltipText="Add Slugline" onClick={() => handleLineFormat('slugline')}>
                <FiPlay />
              </TooltipButton>
              <TooltipButton tooltipText="Add Action" onClick={() => handleLineFormat('action')}>
                <MdCallToAction />
              </TooltipButton>
              <TooltipButton tooltipText="Add Keyword" onClick={() => handleLineFormat('keyword')}>
                <LuWholeWord />
              </TooltipButton>
              <TooltipButton tooltipText="Add Character" onClick={() => handleLineFormat('character')}>
                <CgGhostCharacter />
              </TooltipButton>
              <TooltipButton tooltipText="Add Parenthetical" onClick={() => handleLineFormat('parenthetical')}>
                <PiBracketsRoundBold />
              </TooltipButton>
              <TooltipButton tooltipText="Add Dialogue" onClick={() => handleLineFormat('dialogue')}>
                <GiConversation />
              </TooltipButton>
              <TooltipButton tooltipText="Add Transition" onClick={() => handleLineFormat('transition')}>
                <TbTransitionRight />
              </TooltipButton>
              <TooltipButton tooltipText="Add Montage" onClick={() => handleLineFormat('montage')}>
                <LiaColumnsSolid />
              </TooltipButton>
              <TooltipButton tooltipText="Add Flashback" onClick={() => handleLineFormat('flashback')}>
                <IoPlaySkipBackSharp />
              </TooltipButton>
              <TooltipButton tooltipText="Add Text on Screen" onClick={() => handleLineFormat('text_on_screen')}>
                <TbTextRecognition />
              </TooltipButton>            
          </div>
          <div className="screenplay-editor-container">
            {/* Editor */}
            <div className="editor-box" onClick={() => editorRef.current?.focus()}>
              <Editor
                ref={editorRef}
                editorState={editorState}
                onChange={setEditorState}
                blockStyleFn={blockStyleFn}
              />
            </div>
          </div>
          
        </div>
        
        {/* Settings Popup */}
        {showSettingsPopup && (
          <div className="settings-popup-overlay" onClick={() => setShowSettingsPopup(false)}>
            <div className="settings-popup" onClick={(e) => e.stopPropagation()}>
              <h3>Screenplay Settings</h3>
              
              <div className="settings-form">
                <div className="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    value={screenplayTitle}
                    onChange={(e) => setScreenplayTitle(e.target.value)}
                    placeholder="Enter screenplay title"
                  />
                  <button onClick={() => console.log("Title:", screenplayTitle)}>Save</button>
                </div>
                
                <div className="form-group">
                  <label>Written by:</label>
                  <input
                    type="text"
                    value={writtenBy}
                    onChange={(e) => setWrittenBy(e.target.value)}
                    placeholder="Enter author name"
                  />
                  <button onClick={() => console.log("Written by:", writtenBy)}>Save</button>
                </div>
                
                <div className="form-group">
                  <label>Based on:</label>
                  <input
                    type="text"
                    value={basedOn}
                    onChange={(e) => setBasedOn(e.target.value)}
                    placeholder="Enter source material"
                  />
                  <button onClick={() => console.log("Based on:", basedOn)}>Save</button>
                </div>
                
                <div className="form-group">
                  <label>Contact:</label>
                  <input
                    type="text"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Enter contact information"
                  />
                  <button onClick={() => console.log("Contact:", contact)}>Save</button>
                </div>
                
                <div className="form-group">
                  <label>Draft date:</label>
                  <input
                    type="date"
                    value={draftDate}
                    onChange={(e) => setDraftDate(e.target.value)}
                  />
                  <button onClick={() => console.log("Draft date:", draftDate)}>Save</button>
                </div>
                
                <div className="popup-actions">
                  <button onClick={() => setShowSettingsPopup(false)}>Cancel</button>
                  <button onClick={handleSettingsSave} className="save-all-btn">Save All</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>  
    </>
  );
}