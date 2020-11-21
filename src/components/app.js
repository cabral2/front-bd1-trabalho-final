import React, { useState } from "react";

// Local
import NavBar from "./nav-bar";
import AppBody from "./app-body";

// Material

const App = (props) => {
    const [currentPage, setCurrentPage] = useState("home");

    const changePage = (page) =>
        currentPage !== page ? setCurrentPage(page) : null;

    const pages = ["home", "funcionarios", "aviao", "passageiro", "viagem"];

    return (
        <>
            <NavBar changePage={changePage} pages={pages} />
            <AppBody currentPage={currentPage} />
        </>
    );
};

export default App;
