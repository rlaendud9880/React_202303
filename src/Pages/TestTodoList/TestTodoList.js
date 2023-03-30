import { useState } from 'react';
import "./TestTodoList.css";
import  { AiOutlineFileText } from 'react-icons/ai';


function TestTodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const addItem = () => {
    if (inputValue.trim()) {
      const date = new Date();
      setTodos([
        ...todos,
        {
          id: Date.now(),
          date: formatDate(date),
          time: formatTime(date),
          memo: inputValue,
        },
      ]);
      setInputValue("");
    }
  };
  
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) { // enter key
      addItem();
    }
  }

  const editItem = (item) => {
    setEditMode(true);
    setEditValue(item.memo);
    setEditingItem(item);
  };

  const updateItem = () => {
    if (editValue.trim()) {
      const date = new Date();
      setTodos(
        todos.map((item) =>
          item.id === editingItem.id
            ? { ...item, memo: editValue, date: formatDate(date), time: formatTime(date) }
            : item
        )
      );
      setEditMode(false);
      setEditValue("");
      setEditingItem(null);
    }
  };

  const deleteItem = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const renderItem = (item) => {
    return (
      <li key={item.id} className="todo-item">
        <div className="todo-item-header">
          <span className="todo-item-date">{item.date}</span>
          <span className="todo-item-time">{item.time}</span>
          <span className="todo-item-line">{item.line}</span>
        </div>
        <div className="todo-item-body">
          <span className="todo-item-memo">{item.memo}</span>
        </div>
        <div className="todo-item-footer">
          <button onClick={() => editItem(item)} className="todo-item-edit">
            수정
          </button>
          <button onClick={() => deleteItem(item.id)} className="todo-item-delete">
            삭제
          </button>
        </div>
      </li>
    );
  };

  return (
    <div className="todo-container">
      <div className="todo-form">
        <h1 className="todo-title" >Todo </h1>
        <AiOutlineFileText className="todo-icon" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Please enter todo..."
          className="todo-input"
          onKeyDown={handleKeyDown}
        />
        <button onClick={addItem} className="todo-button">
          +
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((item) => renderItem(item))}
      </ul>
      {editMode && (
        <div className="edit-modal">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="edit-input"
            />
            <button onClick={updateItem} className="edit-button">
              완료
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TestTodoList;
