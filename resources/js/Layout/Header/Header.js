import React from "react";
import Link from "react-router-dom";

import authContext from "../../context/authContext";
import {useAuth} from "../../hooks/useAuth";

function Header() {
    const {authData} = useContext(authContext);

}
