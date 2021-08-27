import { Button, Form, Input, Divider, InputNumber, DatePicker } from "antd";
import * as AiIcons from "react-icons/ai";

function NewAssignment({ toggleNew }) {
  return (
    <div className="fill-overlay">
      <div className="navbar-top">
        <div className="nav-wrapper">
          <div className="nav-item" onClick={() => toggleNew()}>
            <AiIcons.AiOutlineArrowLeft />
          </div>

          <div className="nav-item">
            <AiIcons.AiOutlineLink />
          </div>
        </div>
      </div>
      <div className="no-bottom-nav-main white-bg animate__animated animate__fadeInUp">
        <div className="container">
          <Divider>Create Assignment</Divider>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
          >
            <Form.Item
              label="Title"
              name="title"
              rules={[{ required: true, message: "Please input title!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                { required: true, message: "Please input your description!" },
              ]}
            >
              <Input.TextArea />
            </Form.Item>
            <Form.Item
              label="Marks"
              name="marks"
              rules={[{ required: true, message: "Please input your marks!" }]}
            >
              <InputNumber min={1} max={150} style={{ width: "100%" }} />
            </Form.Item>
            <input type="file" name="file" />
            <Form.Item
              label="Due Date"
              name="dueDate"
              rules={[
                { required: true, message: "Please input your due date!" },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Topic"
              name="topic"
              rules={[{ required: true, message: "Please input your topic!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                icon={<AiIcons.AiOutlinePlus />}
                htmlType="submit"
                block
              >
                Assign
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default NewAssignment;
