import React, { useEffect, useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { DataGrid, isArray } from "@material-ui/data-grid";
import { get, remove } from "../api";
import { pages, isAnalysis } from "./lib";

const Table = (props) => {
    const { page, campos, auxUpdateTable, handleEdit } = props;
    const [tableData, setTableData] = useState([]);
    const [refetch, setRefetch] = useState(false);

    const analysis = isAnalysis(page);

    useEffect(() => {
        setTableData([]);
        get(page).then((data) => {
            if (data && isArray(data)) {
                const parsedData = data.map((x) => {
                    if (
                        page === pages.FUNCIONARIO ||
                        page === pages.PASSAGEIRO ||
                        page === pages.LISTA_PASSAGEIROS
                    )
                        return { ...x, id: x.cpf };

                    if (page === pages.PASSAGEM) {
                        return { ...x, id: `${x.passageiroCPF}/${x.viagemId}` };
                    }

                    if (page === pages.FUNCIONARIO_TRIPULACAO) {
                        return { ...x, id: `${x.cpf}/${x.idTripulacao}` };
                    }

                    if (
                        page === pages.QUANT_VIAGEM ||
                        page === pages.MULT_VIAGEM ||
                        page === pages.IDADE_PASSAGEIROS
                    ) {
                        return { ...x, id: `${x.cpf}/${x.destino}` };
                    }

                    return { ...x };
                });
                setTableData(parsedData);
            }
        });
        setRefetch(false);
    }, [campos, auxUpdateTable, page, refetch]);

    const handleRemove = function (page, id) {
        remove(page, id).then(() => setRefetch(true));
    };

    const columns = campos
        ? campos.map((campo) => {
              return {
                  field: campo.prop,
                  headerName: campo.name,
                  flex: 1,
              };
          })
        : null;

    !analysis &&
        columns.push({
            field: "edit",
            headerName: "Editar",
            flex: 1,
            renderCell: (params) => (
                <IconButton
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleEdit(params.data)}
                >
                    <EditIcon />
                </IconButton>
            ),
        });

    !analysis &&
        columns.push({
            field: "remove",
            headerName: "Remover",
            flex: 1,
            renderCell: (params) => (
                <IconButton
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => handleRemove(page, params.data.id)}
                >
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
                height: "400px",
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
