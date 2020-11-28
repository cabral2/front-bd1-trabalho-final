import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { get } from "../api";

const Table = (props) => {
    const { campos, page } = props;
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        get(page).then((data) => {
            if (data) {
                const parsedData = data.map((x) => {
                    return { ...x, id: x.cpf };
                });
                setTableData(parsedData);
            }
        });
    }, []);

    const columns = campos
        ? campos.map((campo) => {
              return {
                  field: campo.prop,
                  headerName: campo.name,
                  flex: 1,
              };
          })
        : null;

    return (
        <div
            style={{
                height: "80%",
                width: "100%",
                marginTop: "1vh",
                display: "flex",
            }}
        >
            <DataGrid rows={tableData} columns={columns} pageSize={5} />
        </div>
    );
};

export default Table;
