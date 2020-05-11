import React from "react";
import classes from "./DefaultLayout.module.scss"

const DefaultLayout = () => {
    return (
        <div className={classes.defaultLayout}>
            <header>Header</header>
            <main className={classes.mainContainer}>
                Main
            </main>
            <footer className={classes.layoutFooter}>Footer</footer>
        </div>
    )
};

export default DefaultLayout;