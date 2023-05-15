import React from "react";
import Entry from "./components/Entry";
import emojipedia from "./emojipedia";

var creatEntry = (entries) => {
  return (
    <Entry
      key={entries.id}
      emoji={entries.emoji}
      name={entries.name}
      meaning={entries.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(creatEntry)}
      </dl>
    </div>
  );
}

export default App;
