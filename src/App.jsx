import { useState } from "react";
import ControlPanel from "./components/ControlPanel";
import PreviewPanel from "./components/PreviewPanel";

function App() {
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium")
  const [cardStyle, setCardStyle] = useState("bordered")
  const [showTips, setShowTips] = useState(true)

  return (
    <div className={theme}>
      <h1>React Preferences Dashboard</h1>

      <ControlPanel 
      setTheme = {setTheme} 
      setFontSize={setFontSize} 
      setCardStyle={setCardStyle}
      toggleTips={() => setShowTips(!showTips)}
      />
      <PreviewPanel 
      theme={theme} 
      fontSize={fontSize} 
      cardStyle={cardStyle}
      showTips={showTips}
      />
    </div>
  )
}

export default App