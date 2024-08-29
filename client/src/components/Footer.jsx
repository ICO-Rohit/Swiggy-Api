import UserContext from "./utils/UserContext";
import { useContext } from "react";

const Footer = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1 className="text-4xl text-center">Footer</h1>
            <h1 className="text-center">{user.name} - {user.email}</h1>
        </div>
    )
}

export default Footer
