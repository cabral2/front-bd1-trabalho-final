import React, { useState } from "react";

// Local
import { pages } from "./lib";
import NavBar from "./nav-bar";
import AppBody from "./app-body";

const App = () => {
    const [currentPage, setCurrentPage] = useState(pages.HOME);

    const changePage = (page) =>
        currentPage !== page ? setCurrentPage(page) : null;

    return (
        <>
            <NavBar changePage={changePage} pages={pages} />
            <AppBody currentPage={currentPage} />
        </>
    );
};

export default App;
