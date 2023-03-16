import React, { useState } from "react";
import { Button, Modal, Table, Select, Form } from "antd";
import { useEditData } from "../../utils/hooks/updateData"; 
import { useGetData } from "../../utils/hooks/getData";
import c from "./style.module.scss";

function Massage() {
  const [current, setCurrent] = useState(null);

  const columns = [
    {
      title: "Name",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (obj) => (
        <Button
          type="primary"
          onClick={() => {
            setId(obj.id);
            showModal();
            console.log(obj);
          }}
        >
          Open Modal
        </Button>
      ),
    },
  ];
  // modal func start
  const [id, setId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };

  function Submit(values) {}

  // modal func end
  const message = useGetData(["message"], "/message");
  console.log(message?.data?.data, "qwer");
  if (message?.isLoading) {
    return <h1>Loading...</h1>;
  }

  // const selmessage = useEditData(["message"], `/message/${id}`)

  const item = id && message?.data?.data.find((i) => i.id == id);
  return (
    <div>
      <h1> Massage</h1>
      <Modal
        title="Message"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          onFinish={(values) => {
            console.log(values);
            // message?.data?.data.patch()
          //  selmessage.mutate(
          //   {
          //     status: values.status,

          //   },
          //   {
          //     onSuccess: () => {console.log('success')},
          //     onError: () => {console.log('error')}
          //   }
          //  )
          }}
        >
          <Form.Item name={"status"} initialValue={item.status}>
            <Select
              showSearch
              defaultValue={item.status}
              //   placeholder={`${item.status}`}
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "PENDING",
                  label: "PENDING",
                },
                {
                  value: "RESOLVED",
                  label: "RESOLVED",
                },
                {
                  value: "REJECTED",
                  label: "REJECTED",
                },
              ]}
            />
          </Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form>

        {/* <p>{item.subject}</p> */}
      </Modal>
      <Table dataSource={message?.data?.data} columns={columns}></Table>;
    </div>
  );
}

export default Massage;

const App = () => {};
