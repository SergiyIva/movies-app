import React, { useCallback } from "react";
import MovieCard from "./MovieCard/MovieCard";
import { Col, Pagination, Row } from "antd";
import useWindowSize from "../../hooks/useWindowWidth";
import img from "../../imgs/img.png";

// заполнение данными описаний
const data = [
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  },
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  },
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  },
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  },
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  },
  {
    title: "The way back",
    date: "March 5, 2020",
    rate: 6.6,
    img,
    tags: ["Action", "Drama"],
    description:
      "A former basketball all-star, who has lost his wife and family foundation in a struggle with addiction attempts to regain his soul and" +
      "salvation by becoming the coach of a disparate ethnically mixed high ...",
    rateValue: 2.5
  }
];
const Main = () => {
  // хук для динамического отслеживания изменения размера экрана,
  const { width } = useWindowSize();
  // получаем различные значения с помощью ф-ций ниже для различных разрешений экранов
  const getGutter = useCallback(
    () => (width > 670 ? [32, 32] : [18, 18]),
    [width]
  );
  const getSpan = useCallback(() => (width > 576 ? 12 : 24), [width]);
  return (
    <div className={"main"}>
      {/*строка принимающая значение gutter, равное значению отступов между елементами*/}
      <Row gutter={getGutter()}>
        {/*создаем шесть одинаковых елементов карточек фильмов*/}
        {data.map(
          ({ date, rate, img, title, idx, tags, description, rateValue }) => (
            // элемент колонки, принимает span, значение которого отвечает за количество эл-в в строке.
            // Так, при span=24 отрисовывается по одному эл-ту в строке (низкое разрешение экрана)
            // при span=12 в два раза больше, то есть 2 соответственно
            <Col span={getSpan()} key={idx}>
              <MovieCard
                date={date}
                title={title}
                rate={rate}
                tags={tags}
                img={img}
                rateVale={rateValue}
                description={description}
              />
            </Col>
          )
        )}
      </Row>
      <Pagination
        defaultCurrent={1}
        total={50}
        // беру значение отступа сверху, равного отступам между елементам (в целях общей стилизации)
        style={{ marginTop: getGutter()[0] }}
      />
    </div>
  );
};

export default Main;
