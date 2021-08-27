import { useState } from "react";
import List from "../../components/List";
import { Button, Divider } from "antd";
import * as AiIcons from "react-icons/ai";
import Sheet from "../../components/Sheet";

function Teachers() {
  const data = [
    {
      id: 0,
      title: "Mabelane TE",
      status: true,
      content: "Grade 08 | Natural Sciences",
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
      title: "Mazibuko KL",
      status: true,
      content: "Grade 10 | Accounting",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(1)} />}
        />
      ),
    },
    {
      id: 2,
      title: "Legodi TG",
      status: true,
      content: "Grade 12 | Physical Sciences",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(2)} />}
        />
      ),
    },
    {
      id: 3,
      title: "Nkoana ZC",
      status: true,
      content: "Grade 09 | English FAL",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(3)} />}
        />
      ),
    },
    {
      id: 4,
      title: "Smith BM",
      status: true,
      content: "Grade 12 | Afrikaans",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(4)} />}
        />
      ),
    },
    {
      id: 5,
      title: "Smith BM",
      status: true,
      content: "Grade 11 | Afrikaans",
      btn: (
        <Button
          type="link"
          icon={<AiIcons.AiOutlineDelete onClick={() => deleteItem(4)} />}
        />
      ),
    },
  ];

  let [sheetSate, setSheet] = useState(false);

  const subjects = [
    {
      id: 0,
      item: "Afrikaans HL",
    },
    {
      id: 1,
      item: "English HL",
    },
    {
      id: 3,
      item: "IsiNdebele HL",
    },
    {
      id: 4,
      item: "TshiVenda HL",
    },
    {
      id: 5,
      item: "Tsonga HL",
    },
    {
      id: 6,
      item: "Afrikaans FAL",
    },
    {
      id: 7,
      item: "English FAL",
    },
    {
      id: 8,
      item: "IsiNdebele FAL",
    },
    {
      id: 9,
      item: "TshiVenda FAL",
    },
    {
      id: 10,
      item: "Tsonga FAL",
    },
    {
      id: 11,
      item: "Mathematics",
    },
    {
      id: 12,
      item: "Mathematical Literacy",
    },
    {
      id: 13,
      item: "Life Skills",
    },
    {
      id: 14,
      item: "Natural Sciences",
    },
    {
      id: 15,
      item: "Social Sciences",
    },
    {
      id: 16,
      item: "Creative Arts",
    },
    {
      id: 17,
      item: "Life Orientation",
    },
    {
      id: 18,
      item: "Technology",
    },
    {
      id: 19,
      item: "Economics Management Sciences",
    },
    {
      id: 2,
      item: "Accounting",
    },
    {
      id: 21,
      item: "Agricultural Sciences",
    },
    {
      id: 22,
      item: "Business Studies",
    },
    {
      id: 23,
      item: "Civil Engineering",
    },
    {
      id: 24,
      item: "Economics",
    },
    {
      id: 25,
      item: "Geography",
    },
    {
      id: 26,
      item: "History",
    },
    {
      id: 27,
      item: "Life Sciences",
    },
    {
      id: 28,
      item: "Machenical Engineering",
    },
    {
      id: 29,
      item: "Physical Sciences",
    },
    {
      id: 30,
      item: "Religious Education",
    },
    {
      id: 31,
      item: "Technical Mathematics",
    },
  ];

  const sheetBody = [
    {
      body: (
        <div className="container max-height flex">
          <div>
            <Divider>New Educator</Divider>
            <input
              type="text"
              className="input"
              placeholder="Edicator's Surname and Initials"
            />
            <select className="input" defaultValue="Select Grade">
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
            <select className="input" defaultValue="Select Subject">
              {subjects.map((subject) => (
                <option key={subject.id} value={subject.item}>
                  {subject.item}
                </option>
              ))}
            </select>
            <Button type="primary" block>
              SAVE
            </Button>
          </div>
        </div>
      ),
    },
  ];

  const deleteItem = (id) => {
    console.log(id);
  };

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

export default Teachers;
