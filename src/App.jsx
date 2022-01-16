import { useState } from "react";
import "./styles.css";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (i) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(i, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComplete = (i) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);

    const newcompleteTodos = [...completeTodos, incompleteTodos[i]];
    setcompleteTodos(newcompleteTodos);
    setincompleteTodos(newIncompleteTodos);
  };

  const onClickBack = (i) => {
    const newcompleteTodos = [...completeTodos];
    newcompleteTodos.splice(i, 1);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[i]];
    setincompleteTodos(newIncompleteTodos);
    setcompleteTodos(newcompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          type="text"
          placeholder="Todoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <h2 className="title">未完了のToDo</h2>
        <ul>
          {incompleteTodos.map((todo, i) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button onClick={() => onClickComplete(i)}>完了</button>
                <button onClick={() => onClickDelete(i)}>削除</button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <h2 className="title">完了のToDo</h2>
        <ul>
          {completeTodos.map((todo, i) => {
            return (
              <li key={todo} className="list-row">
                <div>{todo}</div>
                <button onClick={() => onClickBack(i)}>戻す</button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
