import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Rohit Yadav",
        email: "madiaa2002@gmail.com"
    }
})

export default UserContext;