import HeaderSection from "/src/components/HeaderSection/index.js";
import NotesSection from "/src/components/NotesSection/index.js";

const headerElement = document.getElementById("headers");
new HeaderSection(headerElement);

const noteElement = document.getElementById("notes-app");
new NotesSection(noteElement);
