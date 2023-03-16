import React from "react";
import { useGetData } from "../../utils/hooks/getData";
import c from "./style.module.scss";
import { Table } from "antd";

function User() {
  const user = useGetData(["user"], "/user");

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Users",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Russion",
    //   dataIndex: "name_Ru",
    //   key: "name_Ru",
    // },
    // {
    //   title: "Photo",
    //   dataIndex: "photo",
    //   key: "photo",
    //   render: (photo) => <img src={photo.path} />,
    // },
    // {
    //   title: 'Action',
    //   key: 'action',
    //   render: (_, record) => (
    //     <Space size="middle">

    //       <a onClick={()=>{delCat()}}>Delete</a>
    //     </Space>
    //   ),
    // },
  ]

  console.log(user?.data);
  return (
    <div>
      <h1 className={c.Users}>Users</h1>
      
        <Table dataSource={user?.data} columns={columns} scroll={{ y: 600 }} />
    
    </div>
  );
}

export default User;
