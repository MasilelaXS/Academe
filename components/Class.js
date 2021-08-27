import { Button, Divider } from "antd";
import * as AiIcons from "react-icons/ai";
import { GrAttachment } from "react-icons/gr";
import Learner from "./List";

function Class({ title, toggleClass }) {
  const data = [
    {
      id: 0,
      title: "Mashaba Mahlatse",
      status: false,
      content: "Learner not submitted",
    },
    {
      id: 1,
      title: "Ledwaba Sammy",
      status: false,
      content: "Learner not submitted",
    },
    {
      id: 2,
      title: "Malatsi Karabo",
      status: true,
      content: "Learner submitted",
      btn: <Button type="link" icon={<AiIcons.AiOutlineDownload />} />,
    },
    {
      id: 3,
      title: "Masemola Beyonce",
      status: true,
      content: "Learner submitted",
      btn: <Button type="link" icon={<AiIcons.AiOutlineDownload />} />,
    },
    {
      id: 4,
      title: "Mashaba Mahlatse",
      status: false,
      content: "Learner not submitted",
    },
    {
      id: 5,
      title: "Ledwaba Sammy",
      status: false,
      content: "Learner not submitted",
    },
    {
      id: 6,
      title: "Malatsi Karabo",
      status: true,
      content: "Learner submitted",
      btn: <Button type="link" icon={<AiIcons.AiOutlineDownload />} />,
    },
    {
      id: 7,
      title: "Masemola Beyonce",
      status: true,
      content: "Learner submitted",
      btn: <Button type="link" icon={<AiIcons.AiOutlineDownload />} />,
    },
  ];
  return (
    <div className="fill-overlay">
      <div className="navbar-top">
        <div className="nav-wrapper">
          <div className="nav-item" onClick={() => toggleClass()}>
            <AiIcons.AiOutlineArrowLeft />
          </div>
        </div>
      </div>
      <div className="no-bottom-nav-main white-bg animate__animated animate__fadeInUp">
        <div className="container">
          <Divider>{title}</Divider>
          <Learner data={data} />
        </div>
      </div>
    </div>
  );
}

export default Class;
