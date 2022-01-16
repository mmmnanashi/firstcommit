import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <h2 className="title">未完了のToDo</h2>
      <ul>
        {todos.map((todo, i) => {
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
  );
};
