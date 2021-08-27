import { useState } from "react";
import CardTemplate from "../../components/Card";
import * as AiIcons from "react-icons/ai";
import { Button } from "antd";
import NewAssignment from "../../components/NewAssignment";
import ViewClass from "../../components/Class";

function Assignment() {
  let [newShow, setNew] = useState(false);
  let [seeClass, setClass] = useState(false);

  const data1 = [
    {
      title: "Mathematics",
      content: "Assignment 1 | Submissions: 8/76",
      footer: "Due Date: 27 July 2021",
      progress: true,
      processType: "line",
      percentage: 25,
    },
  ];

  const toggleNew = () => {
    setNew(!newShow);
  };

  const action1 = () => console.log("Action 1");
  const action2 = () => setClass(!seeClass);
  return (
    <>
      {seeClass == true && (
        <ViewClass
          toggleClass={() => setClass(!seeClass)}
          title="Mathematics"
        />
      )}
      {newShow == true && <NewAssignment toggleNew={toggleNew} />}
      <div className="main animate__animated animate__fadeInRight">
        <div className="top-right-btn">
          <Button
            type="default"
            className="flex justify-center"
            onClick={() => toggleNew()}
          >
            <AiIcons.AiOutlinePlus /> Create
          </Button>
        </div>
        <CardTemplate
          cardTitle="Assignment"
          cardBody={data1}
          btn1="Delete"
          btn2="View Class"
          btn1Action={action1}
          btn2Action={action2}
        />
      </div>
    </>
  );
}

export default Assignment;
