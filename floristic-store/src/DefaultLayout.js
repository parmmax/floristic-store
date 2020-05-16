import React from 'react';
import classes from './DefaultLayout.module.scss'

import './assets/fonts.scss'
import './assets/reset.scss'

// debugger;
<<<<<<< HEAD
//код из примера по анимации
// -------------------------------------------------------------------------------------------------------
document.onclick = function (e) {
    // показывает координаты точки клика
    coords.innerHTML = e.clientX + ':' + e.clientY;
};
=======
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("menu").style.height = "80px";
    } else {
        document.getElementById("menu").style.height = "160px";
    }
}
>>>>>>> 0eea2fadcf19bf98ab8fbbd1d99cfbe86a9e9add


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
<<<<<<< HEAD

                {/* Разметка из примера по анимации */}
                
                <div id="coords">(координаты покажутся здесь)</div>
                <div id="field">
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
                </div>
                <div className="triangle-right" style="left:-20px;top:-176px">1</div>
                <div className="triangle-right" style="left:-10px;top:-178px">3</div>
                <div className="triangle-right" style="left:190px;top:-40px">4</div>
                <div className="triangle-right" style="left:200px;top:-42px">2</div>

                {/* Конец разметки из примера по анимации */}

                <section className="firstSection">
                    <h2>First section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur cum, cumque
                    debitis deleniti dolores ducimus eligendi eos et eveniet excepturi explicabo facilis fugit
                    incidunt iusto laborum minima molestiae nam natus nisi non officiis omnis perferendis quaerat
                    quam quasi quis quod quos recusandae reprehenderit repudiandae saepe sapiente similique unde vel
                    veritatis vitae. Architecto eos necessitatibus obcaecati officiis pariatur, rem totam.
=======
                <section className={classes.firstSection}>
                    <h2>First section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consequuntur cum, cumque
                        debitis deleniti dolores ducimus eligendi eos et eveniet excepturi explicabo facilis fugit
                        incidunt iusto laborum minima molestiae nam natus nisi non officiis omnis perferendis
                        quaerat
                        quam quasi quis quod quos recusandae reprehenderit repudiandae saepe sapiente similique unde
                        vel
                        veritatis vitae. Architecto eos necessitatibus obcaecati officiis pariatur, rem totam.
>>>>>>> 0eea2fadcf19bf98ab8fbbd1d99cfbe86a9e9add
                    </div>
                </section>
                <section className={classes.secondSection}>
                    <h2>Second section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dicta illo vero
<<<<<<< HEAD
                    voluptatum! Asperiores debitis dicta, error inventore labore nemo, quaerat quam quia quis,
                    recusandae sapiente sint? At aut dignissimos doloribus ex explicabo iste laudantium magnam
                    maxime mollitia natus nisi, obcaecati odit placeat repellendus repudiandae saepe sapiente,
                    tempora. Accusantium beatae dicta dolorum excepturi explicabo fugit illo impedit laborum libero
                    maiores minima minus natus nemo optio sequi similique, soluta tenetur velit!
=======
                        voluptatum! Asperiores debitis dicta, error inventore labore nemo, quaerat quam quia quis,
                        recusandae sapiente sint? At aut dignissimos doloribus ex explicabo iste laudantium magnam
                        maxime mollitia natus nisi, obcaecati odit placeat repellendus repudiandae saepe sapiente,
                        tempora. Accusantium beatae dicta dolorum excepturi explicabo fugit illo impedit laborum
                        libero
                        maiores minima minus natus nemo optio sequi similique, soluta tenetur velit!
>>>>>>> 0eea2fadcf19bf98ab8fbbd1d99cfbe86a9e9add
                    </div>
                </section>
                <section className={classes.thirdSection}>
                    <h2>Third section</h2>
<<<<<<< HEAD
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam debitis, est expedita
                    magni obcaecati omnis quae, quo tenetur totam vel velit! Ab adipisci aliquam aliquid beatae
                    cumque deleniti dicta eius harum ipsam maiores minus modi mollitia nesciunt obcaecati porro quas
                    qui, quos recusandae sequi tempore tenetur velit voluptatem voluptatum? Accusamus, aliquid
                    corporis debitis error eveniet expedita explicabo facere fugit laboriosam libero nisi non
                    nostrum obcaecati odio pariatur repellendus ullam.
                    </div>
                </section>

                <section className="fourthSection">
                    <h2>Fourth section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dignissimos eius eligendi,
                    eos est exercitationem fugiat illo, magnam neque nobis nulla possimus quae quo rem voluptatum?
                    Iure maiores pariatur quas sequi voluptates. Deleniti fugiat ipsa odit provident reprehenderit
                    veniam. Alias, aperiam, ducimus eveniet in inventore itaque iusto, molestiae nobis quia quod
                    suscipit veniam? Amet atque aut autem, cupiditate dolorum est ex, expedita iure, nulla placeat
                    repudiandae voluptatem voluptatum. Cumque, excepturi.
                    </div>
                </section>

                <section className="fifthSection">
                    <h2>Fifth section</h2>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid dolor excepturi, harum
                    minima placeat provident quis quo ratione sapiente sed temporibus. Alias animi atque cum
                    dignissimos, dolore fugit maxime nam nemo nihil nobis optio quas quia, rerum sed temporibus
                    velit, voluptatum! Deleniti doloremque eos excepturi ipsam libero, nemo quam rerum sint
                    voluptate voluptates. Aspernatur at atque blanditiis cumque laborum natus nulla perspiciatis
                    reprehenderit? Asperiores consequuntur deserunt dolore minima tempora.
                    </div>
                </section>
=======
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, aperiam debitis, est
                        expedita
                        magni obcaecati omnis quae, quo tenetur totam vel velit! Ab adipisci aliquam aliquid beatae
                        cumque deleniti dicta eius harum ipsam maiores minus modi mollitia nesciunt obcaecati porro
                        quas
                        qui, quos recusandae sequi tempore tenetur velit voluptatem voluptatum? Accusamus, aliquid
                        corporis debitis error eveniet expedita explicabo facere fugit laboriosam libero nisi non
                        nostrum obcaecati odio pariatur repellendus ullam.
                    </div>
                </section>
>>>>>>> 0eea2fadcf19bf98ab8fbbd1d99cfbe86a9e9add
            </main>

            <footer className={classes.layoutFooter}>Footer</footer>
        </div>
    )
};

export default DefaultLayout;