import React from "react";
import { Tabs } from "antd";
import Search from "../Search/Search";

//ф-ция обработки изменения вкладки, на данный момент просто выводит лог в консоль
// переключение между вкладками настроено по умолчанию ant design
const onChange = (key) => {
  console.log(key);
};

// массив элементов вкладок
// children - отображаемый контент для каждой из них
const items = [
  {
    key: "1",
    label: `Search`,
    // можно напрямую передать JSX для отображения (как и сделано)
    children: <Search />
  },
  {
    key: "2",
    label: `Rated`,
    children: `Content of Rated`
  }
];

const HeaderTabs = () => (
  <Tabs
    defaultActiveKey="1"
    // прописываем отступы, чтобы уменьшить длину серой полоски под вкладками
    tabBarStyle={{ marginRight: "auto", marginLeft: "auto" }}
    items={items}
    // центрируем
    centered
    onChange={onChange}
  />
);

export default HeaderTabs;
