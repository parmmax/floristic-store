// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import DefaultLayout from "../DefaultLayout";
// import { Provider } from "react-redux";
//
// const Home= () => (
//     <Home />
// );
//
// const About = () => (
//     <h1>
//         About us
//     </h1>
// );
//
// const Products = () => (
//     <Products/>
// );
//
// const News = () => (
//     <h1>
//         News
//     </h1>
// );
//
// const Contact = () => (
//     <h1>
//         Contact us
//     </h1>
// );
//
// const NotFound = () => (
//     <h1>
//         Not found
//     </h1>
// );
//
// export default (store) => {
//     return (
//         <Provider store={store}>
//             <BrowserRouter>
//                 <Switch>
//                     <DefaultLayout exact path="/" component={Home} />
//                     <DefaultLayout exact path="/about" component={About}/>
//                     <DefaultLayout exact path="/products" component={Products}/>
//                     <DefaultLayout exact path="/news" component={News}/>
//                     <DefaultLayout exact path="/contacts" component={Contact}/>
//                     <Route path="*" component={NotFound}/>
//                 </Switch>
//             </BrowserRouter>
//         </Provider>
//     );
// }