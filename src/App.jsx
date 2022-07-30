import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  // ステートたち
  const [inputTodo, setInputTodo] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, setCompleteTodos] = useState(["ううううう"]);

  // 関数たち
  const onChangeTodoText = (event) => {
    setInputTodo(event.target.value);
  };
  const addTodo = () => {
    const newIncompleteTodos = [...incompleteTodos, inputTodo];
    setInputTodo("");
    setIncompleteTodos(newIncompleteTodos);
  };
  const addCompleteTodo = (index) => {
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    incompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };
  const removeIncompleteTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };
  const returnTodo = (index) => {
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={inputTodo}
          onChange={onChangeTodoText}
        />
        <button disabled={inputTodo === ""} onClick={addTodo}>
          追加
        </button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={index} className="list-row">
                <li>{todo}</li>
                <button onClick={() => addCompleteTodo(index)}>完了</button>
                <button onClick={() => removeIncompleteTodo(index)}>
                  削除
                </button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key="{index}" className="list-row">
                <li>{todo}</li>
                <button onClick={() => returnTodo(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
