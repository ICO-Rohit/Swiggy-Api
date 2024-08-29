import React from "react";
import Header from "./components/Header"
import Body from "./components/Body"
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import UserContext from "./components/utils/UserContext";
import { Provider } from "react-redux";
import store from "./components/utils/CreateStore";

const App = () => {
  const user = {
    user: {
      name: "Rohit",
      email: "12113001@nitkk.ac.in"
    }
  }

  return ( 
    <Provider store={store}>
      <UserContext.Provider value={user}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  )
}

export default App;