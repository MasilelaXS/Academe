import Link from "next/link";
import Audio from "../../../components/Audio";
import * as AiIcons from "react-icons/ai";
import { Breadcrumb } from "antd";

function Acc1() {
  return (
    <div>
      <h4 className="flex container">
        <Breadcrumb>
          <Breadcrumb.Item>Subjects</Breadcrumb.Item>
          <Breadcrumb.Item>Accounting Audio</Breadcrumb.Item>
        </Breadcrumb>
      </h4>

      <Audio
        titleAudio="Accounting Lesson 1"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES01%2030MIN.mp3?ver=2017-03-23-091708-000"
      />

      <Audio
        titleAudio="Accounting Lesson 2"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES02%2030MIN.mp3?ver=2017-03-23-091704-000"
      />

      <Audio
        titleAudio="Accounting Lesson 3"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES03%2030MIN.mp3?ver=2017-03-23-091704-000"
      />

      <Audio
        titleAudio="Accounting Lesson 4"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES04%2030MIN.mp3?ver=2017-03-23-091706-000"
      />

      <Audio
        titleAudio="Accounting Lesson 5"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES05%2030MIN.mp3?ver=2017-03-23-091706-000"
      />

      <Audio
        titleAudio="Accounting Lesson 6"
        srcAudio="https://www.education.gov.za/Portals/0/Media/2nd%20Chance%20Audio/Accounting/ACC%20PAPER01%20LES06%2030MIN.mp3?ver=2017-03-23-091706-000"
      />
    </div>
  );
}

export default Acc1;
