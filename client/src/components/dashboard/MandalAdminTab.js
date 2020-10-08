import React, { useState, useContext,useEffect } from "react";
import { Tabs, Divider, Row, Col } from "antd";
import MandalTable from "./MandalTable";
import Register from "../../views/Auth/Register/Register";
import MandalAdminsTable from "./MandalAdminsTable";
import UserContext from "../../context/user/userContext";

import axios from "axios";
import DataTableAdmin from "./DataTableAdmin";

const { TabPane } = Tabs;


function MandalAdminTab() {
    const userContext = useContext(UserContext);
    const { user } = userContext;
    const [loading, setLoading] = useState(true);
    const [mandalPanel, setmandalPanel] = useState({
        tab: "Existing",
    });
    useEffect(() => {
        getNormalUsers();
      }, []);
    const getNormalUsers = () => {
        axios
          .get("http://localhost:5000/api/admin/getAdmins/null")
          .then((res) => {
            if (res.status === 200) {
              setNormalUsers(res.data.users);
              setLoading(false);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    const { tab } = mandalPanel;
    const [normalUsers, setNormalUsers] = useState([]);
    return (
        <Tabs defaultActiveKey={tab}>
            <TabPane tab="Existing Admins" key="Existing"><MandalTable></MandalTable></TabPane>
            <TabPane tab="Add New Mandal Admin" key="New">
                <center><DataTableAdmin users  = {normalUsers}></DataTableAdmin></center>
            </TabPane>
        </Tabs>
    );
}

export default MandalAdminTab;
