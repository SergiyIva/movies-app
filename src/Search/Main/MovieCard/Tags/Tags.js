import { Space, Tag, Typography } from "antd";
import React from "react";

const { Text } = Typography;
export const Tags = ({ tags }) => {
  return (
    <div>
      {/*эл-т Space добавляет расстояние между вложенными в него компонентами
      расстояние передается в виде массива в size, можно также передать ключевое слово
      large, small или middle*/}
      <Space size={[0, 8]} wrap style={{ marginTop: 7 }}>
        {tags.map((tag) => (
          <Tag>
            <Text type="secondary">{tag}</Text>
          </Tag>
        ))}
      </Space>
    </div>
  );
};
