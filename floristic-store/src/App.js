import React from 'react';
import './App.scss'
import './assets/typography/_fonts.scss'
import './assets/reset/reset.scss'
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";

// debugger;

window.onscroll = () => scrollFunction();

let scrollFunction = () => {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("menu").style.height = "80px";
    } else {
        document.getElementById("menu").style.height = "160px";
    }
};

const App = () => {
    return (
        <div className="defaultLayout">
            <Header/>
            <main className="mainContainer">
                <h1>Main Content</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, asperiores cum enim error est ex fugiat
                    fugit harum labore laudantium minus molestiae nihil nulla obcaecati omnis optio pariatur quam quis
                    recusandae repellat reprehenderit repudiandae sed sunt, temporibus ut velit veritatis voluptas.
                    Accusantium alias, at eius laudantium libero minus modi molestias nemo nostrum perferendis sapiente
                    voluptate? Corporis dignissimos fugiat laborum repellat repudiandae sequi sunt, ut? Aliquid amet
                    assumenda atque beatae commodi cum cupiditate earum eius et fuga in incidunt ipsa ipsam iste
                    laboriosam, possimus praesentium rem rerum sed sequi suscipit voluptates voluptatibus? Ad aliquid,
                    asperiores consequatur nisi officia quaerat repellat. Dolores, enim excepturi harum itaque magnam
                    optio quis quisquam quos voluptas voluptatibus! Animi assumenda, atque autem corporis dignissimos
                    distinctio dolor eligendi, eos eum expedita illo illum ipsa, iusto natus nemo nihil omnis quaerat
                    recusandae repudiandae sint soluta tempora tempore tenetur. A ad aliquam architecto asperiores,
                    commodi culpa deserunt expedita illum iste libero minus odit omnis possimus reiciendis voluptatibus?
                    A aliquid assumenda beatae cupiditate dignissimos dolor ducimus ea earum eius eos eveniet id itaque
                    maiores mollitia natus, non odit omnis optio porro quasi quos recusandae velit voluptatem. Animi
                    culpa cumque dolores eos eum, impedit ipsa minima, quam rerum similique temporibus veritatis
                    voluptatibus.</p>
            </main>
            <Footer/>
        </div>
    )
};

export default App;