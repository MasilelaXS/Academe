function List({ data }) {
  return (
    <>
      {data.map((item) => (
        <div className="list" key={item.id}>
          <div className="learner-container">
            <div className="flex" >
              <div className="status-icon">
                <div className="learner-status">
                  {item.title.match(/\b(\w)/g)}
                </div>
                <div
                  className={`status-dot ${
                    item.status == true && "dot-success"
                  }`}
                ></div>
              </div>
              <div className="learner-content">
                <h4>{item.title}</h4>
                <i>{item.content}</i>
              </div>
            </div>
            <div className="learner-action">{item.btn}</div>
          </div>
        </div>
      ))}
    </>
  );
}

export default List;
