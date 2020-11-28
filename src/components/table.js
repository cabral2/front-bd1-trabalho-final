import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { DataGrid, isArray } from "@material-ui/data-grid";
import { get } from "../api";

const Table = (props) => {
    const { campos, page } = props;
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        get(page).then((data) => {
            if (data && isArray(data)) {
                const parsedData = data.map((x) => {
                    if (page === "funcionario" || page === "passageiro")
                        return { ...x, id: x.cpf };

                    return { ...x };
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

    columns.push({
        field: "edit",
        headerName: "Editar",
        flex: 1,
        renderCell: (params) => (
            <IconButton
                variant="contained"
                color="primary"
                size="small"
                onClick={console.log(params.data)}
            >
                <EditIcon />
            </IconButton>
        ),
    });

    columns.push({
        field: "remove",
        headerName: "Remover",
        flex: 1,
        renderCell: () => (
            <IconButton variant="contained" color="primary" size="small">
                <DeleteIcon />
            </IconButton>
        ),
    });

    return (
        <div
            style={{
                width: "100%",
                marginTop: "1vh",
                display: "flex",
            }}
        >
            <DataGrid
                autoHeight
                rows={tableData}
                columns={columns}
                pageSize={5}
            />
        </div>
    );
};

export default Table;
