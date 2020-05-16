import React from 'react';
import classes from './DefaultLayout.module.scss'

import './assets/fonts.scss'
import './assets/reset.scss'

// debugger;

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("menu").style.height = "80px";
    } else {
        document.getElementById("menu").style.height = "160px";
    }
}

const DefaultLayout = () => {
    return (
        <div className={classes.defaultLayout}>

            <nav id="menu" className={classes.menu}>
                <ul className={classes.list}>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">PRODUCTS</a></li>
                    <li><a href="#">NEWS</a></li>
                    <li><a href="#">CONTACTS</a></li>
                </ul>
            </nav>

            <main className={classes.mainContainer}>
                <h1>Main Content</h1>
                <section className="firstSection">
                    <h2>First section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur cum, cumque
                        debitis deleniti dolores ducimus eligendi eos et eveniet excepturi explicabo facilis fugit
                        incidunt iusto laborum minima molestiae nam natus nisi non officiis omnis perferendis quaerat
                        quam quasi quis quod quos recusandae reprehenderit repudiandae saepe sapiente similique unde vel
                        veritatis vitae. Architecto eos necessitatibus obcaecati officiis pariatur, rem totam.
                    </div>
                </section>
                <section className={classes.secondSection}>
                    <h2>Second section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur atque autem
                        beatae distinctio dolore doloremque est exercitationem id illum impedit inventore ipsam iste
                        laboriosam laborum libero natus nulla qui reiciendis rem repellat sequi, sit sunt temporibus vel
                        veritatis vero! Beatae facilis impedit quibusdam? Amet consectetur debitis, dignissimos eum
                        exercitationem iste nemo neque possimus quae quisquam? Animi culpa delectus dicta dignissimos
                        doloribus esse est hic itaque iure, laborum magnam nostrum numquam praesentium provident
                        repellendus tempore temporibus. Animi deleniti deserunt dolore doloremque doloribus ea est ex
                        explicabo, facilis illo, laudantium, magnam molestiae nisi nulla provident quibusdam saepe sint
                        totam vel voluptatibus.
                    </div>
                </section>
                <section className={classes.thirdSection}>
                    <h2>Third section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam debitis, est expedita
                        magni obcaecati omnis quae, quo tenetur totam vel velit! Ab adipisci aliquam aliquid beatae
                        cumque deleniti dicta eius harum ipsam maiores minus modi mollitia nesciunt obcaecati porro quas
                        qui, quos recusandae sequi tempore tenetur velit voluptatem voluptatum? Accusamus, aliquid
                        corporis debitis error eveniet expedita explicabo facere fugit laboriosam libero nisi non
                        nostrum obcaecati odio pariatur repellendus ullam.
                    </div>
                </section>
            </main>
            <footer className={classes.layoutFooter}>Footer</footer>
        </div>
    )
};

export default DefaultLayout;