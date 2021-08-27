import CardTemplate from "../../components/Card";

function Main() {
  const data1 = [
    {
      title: "Mathematics",
      content: "Submissions",
      progress: true,
      processType: "line",
      percentage: 75,
    },
    {
      title: "Physical Sciences",
      content: "Submissions",
      progress: true,
      processType: "line",
      percentage: 55,
    },
  ];
  const data2 = [
    {
      title: "Active",
      content: "Active Learners",
      progress: true,
      processType: "circle",
      percentage: 45,
    },
  ];

  const data3 = [
    {
      title: "Mathematics",
      content: "Submissions",
      progress: false,
    },
    {
      title: "Physical Sciences",
      content: "Submissions",
      progress: false,
    },
  ];

  const action1 = () => console.log("Action 1");
  const action2 = () => console.log("Action 2");
  return (
    <div className="main animate__animated animate__fadeInRight">
      <CardTemplate cardTitle="Assignment" cardBody={data1} />
      <CardTemplate cardTitle="Class Stats" cardBody={data2} />
      <CardTemplate cardTitle="Class Stats" cardBody="" />
      <CardTemplate
        cardTitle="Class Stats"
        cardBody={data3}
        btn1="Hello"
        btn2="hi"
        btn1Action={action1}
        btn2Action={action2}
      />
    </div>
  );
}

export default Main;
