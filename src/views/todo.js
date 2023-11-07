import CalenderSection from "/src/components/CalenderSection/index.js";
import TodoSection from "/src/components/TodoSection/index.js";
import HeaderSection from "/src/components/HeaderSection/index.js";

const headerElement = document.getElementById("headers");
new HeaderSection(headerElement);

const calenderElement = document.getElementById("calender-todo");
new CalenderSection(calenderElement);

const todoElement = document.getElementById("note-todo");
new TodoSection(todoElement);
