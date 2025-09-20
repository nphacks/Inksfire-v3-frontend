import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Screenplay from "./Pages/Screenplay";
import Home from "./Pages/Home";
import { Studio } from "./Pages/Studio";
import { StoryNotes } from "./Pages/Subpages/Screenplay/StoryNotes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/screenplay/:screenplay_id?" element={<Screenplay />} />
          <Route path="/screenplay/story_notes" element={<StoryNotes />} />
          <Route path="/studio" element={<Studio />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
