import React from "react";

export const CompleteTodos = (props) => {
  const { todos, onClickBack } = props;
  return (
    <div className="complete-area">
      <h2 className="title">完了のToDo</h2>
      <ul>
        {todos.map((todo, i) => {
          return (
            <li key={todo} className="list-row">
              <div>{todo}</div>
              <button onClick={() => onClickBack(i)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
