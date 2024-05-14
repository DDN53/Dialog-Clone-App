import React, { useState } from "react";

export const Languages = ({ onSelectLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageSelect = (event) => {
    const language = event.target.value;
    setSelectedLanguage(language);
    onSelectLanguage(language);
  };

  return (
    <div className="ml-20 -mt-1">
      <select
        className="text-xs"
        value={selectedLanguage}
        onChange={handleLanguageSelect}
        //style={{ width: "100px" }}
      >
        <option className="w-24" value="English">
          English
        </option>
        <option className="w-24" value="Sinhala">
          Sinhala
        </option>
        <option className="w-24" value="Tamil">
          Tamil
        </option>
      </select>
    </div>
  );
};

export default Languages;
