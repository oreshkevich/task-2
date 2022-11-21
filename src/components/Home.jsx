import React, { useState, useEffect } from 'react';
import { getAllNotes } from '../Services/NoteService';
function Home() {
  // const [calendar, setCalendar] = useState([]);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const notes = await getAllNotes();
    setTodos(notes[0].chart);
  }
  console.log(todos);

  return (
    <>
      <div data-testid="main-page">fsfsf</div>
    </>
  );
}

export { Home };
