import React, { useState } from "react";
import "antd/dist/antd.css";
import { Button, Table, Space, Input } from "antd";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined, SearchOutlined } from "@ant-design/icons";
import Modal from "antd/lib/modal/Modal";
import MakeAdmin from "./MakeAdmin";

const DataTableAdmin = (props) => {
  const [table, settable] = useState({ addAdmin: false });
  const { addAdmin } = table;
  const style =
  {
    boxShadow: '0 0px 0px 0 rgba(0, 0, 0, 0.2), 0 3px 6px 0 rgba(0, 0, 0, 0.19)',
    margin: '2em'
  }
  const baseColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => {
        return a.name.localeCompare(b.name);
      },
      sortDirections: ["descend", "ascend", "descend"],
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => {
        return a.email.localeCompare(b.email);
      },
      sortDirections: ["descend", "ascend", "descend"],
      render: (text) => <a>{text}</a>,
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
      sorter: (a, b) => {
        return a.state.localeCompare(b.state);
      },
      sortDirections: ["descend", "ascend", "descend"],
    },
    {
      title: "District",
      dataIndex: "district",
      key: "district",
      sorter: (a, b) => {
        return a.district.localeCompare(b.district);
      },
      sortDirections: ["descend", "ascend", "descend"],
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      sorter: (a, b) => {
        return a.city.localeCompare(b.city);
      },
      sortDirections: ["descend", "ascend", "descend"],
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary" onClick={onViewButton}>
            Make Admin
          </Button>
          <Modal title ="Add Admin" visible={addAdmin} onCancel={onCancel}>
            <MakeAdmin></MakeAdmin>
          </Modal>
        </Space>
      ),
    },
  ];
  const data = [];
  const [state, setstate] = useState({
    filterTable: null,
    columns: baseColumns,
    // props.users: props.users,
    searchText: "",
  });
  const { filterTable, columns, searchText } = state;
  const search = (value) => {
    setstate({
      ...state,
      searchText: value,
      filterTable: props.users.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(value.toLowerCase())
        )
      ),
    });
  };
  const onDeleteButton = (e, text, record) => {
    e.preventDefault();
    console.log(record);
    props.deleteUser(record._id, record.admin);

    function onChange(pagination, filters, sorter, extra) {
      console.log("params", pagination, filters, sorter, extra);
    }
  };

  const onViewButton = () => {
    settable({ ...table, addAdmin: true });
  };
  const onCancel = () => {
    settable({ ...table, addAdmin: false });
  }

  const onChange = (e) => {
    // if (e.value === "") {
    //   setstate({ ...state, filterTable: null });
    // }
    setstate({ ...state, searchText: e.value });
  };
  return (
    <>
      <Input.Search
        placeholder="Search"
        value={searchText}
        onChange={onChange}
        enterButton
        onSearch={search}
      ></Input.Search>
      <Table
        columns={columns}
        dataSource={filterTable === null ? props.users : filterTable}
        style={style}
      >
        {" "}
      </Table>
    </>
  );
};
export default DataTableAdmin;