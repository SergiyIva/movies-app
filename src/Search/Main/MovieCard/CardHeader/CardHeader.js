import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

export const CardHeader = ({ title, rate }) => (
  <div className={"card-header"}>
    <Title
      level={4}
      strong={false}
      className={"title"}
      style={{ fontWeight: 300 }}
    >
      {title}
    </Title>
    {/*такого элемента нет в ant design, поэтому сам отрисовал*/}
    <div className={"rate"}>{rate}</div>
  </div>
);
