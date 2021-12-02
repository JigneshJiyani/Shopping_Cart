import React, { useEffect, useState } from 'react';
import { BiAddToQueue } from "react-icons/bi";
import 'react-toastify/dist/ReactToastify.css';
import NotesList from '../components/NotesList';
import Form from '../components/Form';
import { ToastContainer } from 'react-bootstrap';
import { toast } from 'react-toastify';



const MainNotes = (user, onSignOut) => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({});
  const [inputs, setInputs] = useState({ title: '', body: '' });
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    fetch('/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data.notes))
      .catch((error) => console.log('Error fetching notes', error));
  };
  const getNote = (id) => {
    fetch(`/api/notes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setNote(data.notes);
        setToggle(true);
      })
      .catch((error) => console.log('Note not found', error));
  };
  const addNote = (title, body) => {
    if (!title || !body) {
      toast.error('Please fill all the required input fields');
      return;
    }
    fetch('/api/notes', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => {
        console.log(res.json());
        getNotes();
        setToggle(false);
        setInputs({ title: '', body: '' });
        toast.success('Note added successfully');
      })
      .catch((error) => {
        console.log('Error adding note.', error);
        toast.error('Error adding note.');
      });
  };
  const updateNote = (id, title, body) => {
    if (!title || !body) {
      toast.error('Please fill all the required input fields');
      return;
    }
    fetch(`/api/notes/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: title,
        body: body,
      }),
    })
      .then((res) => {
        getNotes();
        setToggle(false);
        toast.success('Note updated successfully.');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error updating note.');
      });
  };
  const deleteNote = (id) => {
    fetch(`/api/notes/${id}`, { method: 'DELETE' })
      .then((res) => {
        getNotes();
        toast.success('Note deleted successfully');
      })
      .catch((error) => {
        console.log('Note not found', error);
        toast.error('Error deleting note.');
      });
  };

  const handleAdd = () => {
    setInputs({ title: '', body: '' });
    setNote([]);
    setToggle(true);
  };

  return (
    <div style={{
      backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWi9yNmW7slCMx2GIgQu6cb2xri-IgQ6nRwQ&usqp=CAU")`,
      backgroundPosition: "center",
      backgroundSize: "cover"
  }}>
    <div className="container mainnotes">
      <div className="signout">
        <strong>{user.username}</strong>
        <a href="/" onClick={onSignOut}><h1>Sign out</h1></a>
      </div>
      <header className="header">
        <h1 className="header__title">Notes</h1>
        <button className="btn" onClick={handleAdd}>
          Add Note <BiAddToQueue className="btn__icon" size="24" />
        </button>
      </header>
      <NotesList
        notes={notes}
        getNote={getNote}
        setToggle={setToggle}
        deleteNote={deleteNote}
      />
      <Form
        showModal={toggle}
        note={note}
        toggleModal={setToggle}
        addNote={addNote}
        updateNote={updateNote}
        inputs={inputs}
        setInputs={setInputs}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
      />
    </div>
    </div>
  );
};

export default MainNotes;
