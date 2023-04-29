import React from "react";
import { Card, Image, Rate, Space, Tag, Typography } from "antd";
import img from "../../../imgs/img.png";
import useWindowSize from "../../../hooks/useWindowWidth";
import { BottomCard } from "./BottomCard/BottomCard";
import { CardHeader } from "./CardHeader/CardHeader";
import { Tags } from "./Tags/Tags";

// элементы типографии из библиотеки ant design
const { Text } = Typography;
const MovieCard = ({ title, img, rate, date, tags, rateVale, description }) => {
  const { width } = useWindowSize();
  return (
    // атрибут hoverable для придачи картам тени при наведении
    <Card className={"card"} hoverable bodyStyle={{ padding: 0 }}>
      <div className={"cardContent"}>
        <div className={"top-card"}>
          {/*при ширине auto изображение будет занимать максимальную допустимую ширину
          в данном случае это требуется для ПК версии сайта*/}
          <Image width={width >= 992 ? "auto" : 60} src={img} />
          <div className={"right-side"}>
            <CardHeader title={title} rate={rate} />
            <Text type="secondary">{date}</Text>
            <Tags tags={tags} />
            {width >= 992 && (
              <BottomCard description={description} rateValue={rateVale} />
            )}
          </div>
        </div>
        {width < 992 && (
          <BottomCard description={description} rateValue={rateVale} />
        )}
      </div>
    </Card>
  );
};

export default MovieCard;
