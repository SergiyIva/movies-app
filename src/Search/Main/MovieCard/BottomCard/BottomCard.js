import { Rate } from "antd";
import React from "react";

export const BottomCard = ({ description, rateValue }) => {
  return (
    <>
      <p>{description}</p>
      {/* это звезды внизу описания, count отвечает за их кол-во, defaultValue за начальное значение
      отдельно прописал для них свойства стилей с классом stars, чтобы уменьшить отступ между ними, с целью
      избежания перехода части звезд на вторую строку при некоторых разрешениях экрана.*/}
      <Rate
        count={10}
        allowHalf
        defaultValue={rateValue}
        rootClassName={"stars"}
      />
    </>
  );
};
