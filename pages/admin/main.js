import { useState } from "react";
import List from "../../components/List";
import { Button, Divider } from "antd";
import * as AiIcons from "react-icons/ai";
import Sheet from "../../components/Sheet";

function Main() {
  const data = [
    {
      id: 0,
      title: "Accounting",
      status: true,
      content: "Grade 12 | 55 Learners",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete />}
          onClick={() => deleteItem(0)}
        />
      ),
    },
    {
      id: 1,
      title: "Sepedi HL",
      status: true,
      content: "Grade 12 | 120 Learners",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(1)} />}
        />
      ),
    },
    {
      id: 2,
      title: "Business Studies",
      status: true,
      content: "Grade 10 | 07 Learners",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(2)} />}
        />
      ),
    },
    {
      id: 3,
      title: "Creative Arts",
      status: true,
      content: "Grade 9 | 150 Learners",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(3)} />}
        />
      ),
    },
    {
      id: 4,
      title: "Social Sciences",
      status: true,
      content: "Grade 8 | 120 Learners",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(4)} />}
        />
      ),
    },
  ];

  let [sheetSate, setSheet] = useState(false);

  const deleteItem = (id) => {
    console.log(id);
  };

  const sheetBody = [
    {
      body: (
        <div className="container max-height flex">
          <div>
            <Divider>Create Class</Divider>
            <input type="text" className="input" placeholder="Class Name" />
            <select className="input">
              <option value="" selected disabled>
                Select Grade
              </option>
              <option value={0}>Grade R</option>
              <option value={1}>Grade 01</option>
              <option value={2}>Grade 02</option>
              <option value={3}>Grade 03</option>
              <option value={4}>Grade 04</option>
              <option value={5}>Grade 05</option>
              <option value={6}>Grade 06</option>
              <option value={7}>Grade 07</option>
              <option value={8}>Grade 08</option>
              <option value={9}>Grade 09</option>
              <option value={10}>Grade 10</option>
              <option value={11}>Grade 11</option>
              <option value={12}>Grade 12</option>
            </select>
            <Button type="primary" block>
              SAVE
            </Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      {sheetSate == true && (
        <Sheet sheetToggle={() => setSheet(!sheetSate)} sheetBody={sheetBody} />
      )}
      <div
        className="main animate__animated animate__fadeInRight"
        style={{ background: "#fff" }}
      >
        <div className="">
          <div className="top-right-btn">
            <Button
              type="default"
              className="flex justify-center"
              onClick={() => setSheet(!sheetSate)}
            >
              <AiIcons.AiOutlinePlus /> New
            </Button>
          </div>
          <List data={data} />
        </div>
      </div>
    </>
  );
}

export default Main;
