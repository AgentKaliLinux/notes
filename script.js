const form = document.querySelector("#note-form");
const noteList = document.querySelector("#note-list");
let notes = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#note-title").value;
  const body = document.querySelector("#note-body").value;
  const newNote = { title, body };
  notes.unshift(newNote);
  console.log(notes);
  displayNotes();
});

const displayNotes = () => {
  noteList.innerHTML = "";
  notes.forEach((note) => {
    const noteEl = document.createElement("div");
    noteEl.innerHTML = `<h3>${note.title}</h3><p>${note.body}</p>`;
    noteList.appendChild(noteEl);
  });
};
