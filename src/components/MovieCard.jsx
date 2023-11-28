/* eslint-disable react/prop-types */
import { Card, Rate } from "antd";
const { Meta } = Card;

const MovieCard = ({ title, description, posterUrl, rating }) => {
  return (
    <>
      <Card
        className="border-cyan-300"
        hoverable
        cover={<img alt={title} src={posterUrl} />}
      >
        <Meta
          style={{
            marginBottom: "1rem",
          }}
          title={title}
          description={description.slice(0, 160)}
        />
        <Rate disabled allowHalf defaultValue={rating} />
      </Card>
    </>
  );
};
export default MovieCard;
