import * as AiIcons from "react-icons/ai";
import { Divider, Button } from "antd";

function Sheet({ sheetToggle, sheetBody }) {
  return (
    <div className="fill-overlay">
      <div className="navbar-top">
        <div className="nav-wrapper">
          <div className="nav-item" onClick={() => sheetToggle()}>
            <AiIcons.AiOutlineArrowLeft />
          </div>

          <div className="nav-item">
            <AiIcons.AiOutlineLink />
          </div>
        </div>
      </div>
      <div className="no-bottom-nav-main white-bg animate__animated animate__fadeInUp">
        {sheetBody.map((item) => item.body)}
      </div>
    </div>
  );
}

export default Sheet;
