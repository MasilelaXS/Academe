import { Space, Card, Empty, Progress } from "antd";
import * as AiIcons from "react-icons/ai";

function CardTemplate({
  cardTitle,
  cardBody,
  btn1,
  btn2,
  btn1Action,
  btn2Action,
}) {
  return (
    <div>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Card
          size="small"
          title={cardTitle}
          extra={
            <div className="link">
              <AiIcons.AiOutlineEllipsis />
            </div>
          }
          style={{ width: "100%" }}
        >
          {cardBody === "" ? (
            <Empty />
          ) : (
            cardBody.map((cardItem, index) =>
              cardItem.progress == true ? (
                <div key={index}>
                  <h5 className="grey-text">{cardItem.title}</h5>
                  <i style={{ marginRight: "25px" }}>{cardItem.content}</i>
                  <Progress
                    percent={cardItem.percentage}
                    type={cardItem.processType}
                    style={{ marginBottom: "25px" }}
                  />

                  {cardItem.footer == "" ? (
                    ""
                  ) : (
                    <p className="card-footer">{cardItem.footer}</p>
                  )}
                </div>
              ) : (
                <div key={index}>
                  <h5 className="grey-text">{cardItem.title}</h5>
                  <i>{cardItem.content}</i>
                  {cardItem.footer == "" ? (
                    ""
                  ) : (
                    <p className="card-footer">{cardItem.footer}</p>
                  )}
                </div>
              )
            )
          )}
          <div className="cardAction">
            <div className="btnAction" onClick={() => btn1Action()}>
              {btn1}
            </div>
            <div className="btnAction" onClick={() => btn2Action()}>
              {btn2}
            </div>
          </div>
        </Card>
      </Space>
    </div>
  );
}

CardTemplate.defaultProps = {
  btn1: [],
  btn2: [],
};

export default CardTemplate;
