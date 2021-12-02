import Button from '@restart/ui/esm/Button';
import React, { useEffect } from 'react';
import { BiArrowToLeft } from "react-icons/bi";


const Form = ({ showModal, toggleModal, note, addNote, updateNote, inputs, setInputs, }) => {

  useEffect(() => {
    if (note) {
      setInputs({ title: note.title, body: note.body });
    }
  }, [note, setInputs]);

  function handleSubmit(event) {
    event.preventDefault();
    const { title, body } = inputs;
    if (!note.id) {
      addNote(title, body);
      return;
    }
    updateNote(note.id, title, body);
  }

  const handleChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <div className={`modal ${showModal ? 'showModal' : 'hideModal'}`}>
      <div className="go-back-container">
        <button className="go-back" onClick={() => toggleModal(false)}>
          <Button className="fa fa-arrow-circle-left"
            size={32}
            color="#41331c"
            onClick={() => toggleModal(false)}
          />
          <BiArrowToLeft className="btn__icon" size="30" />
        </button>
      </div>
      <form className="modal-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="modal-form-input"
          value={inputs.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
          required
        />
        <textarea
          rows="10"
          className="modal-form-input"
          value={inputs.body}
          placeholder="Start typing ...."
          onChange={handleChange}
          name="body"
          required
        />
        <button type="submit" className="btn" onClick={handleSubmit}>
          {note.id ? 'Update Note' : 'Add Note'}
        </button>
      </form>
    </div>
  );
};

export default Form;