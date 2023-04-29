import React from "react";
import { Input } from "antd";
import Main from "./Main/Main";

// вкладка search - одноименный компонент, содержит две компоненты:
// input - поле ввода для поиска
// main - содержимое страницы ниже
const Search = () => {
  return (
    <>
      <Input placeholder="Type to search..." />
      <Main />
    </>
  );
};

export default Search;
