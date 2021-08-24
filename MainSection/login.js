import React, { useState } from "react";
import { useRouter } from "next/router";
import style from './login.module.css';
import {
    Button,
    TextField,
} from "@material-ui/core";

const Login = () => {
    const router = useRouter();
    const [user, setUser] = useState({
        username: "",
        password: ""

    });

    const { username, password } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
                <div className={`${style.bodyBg}`}>
                    <div className="d-flex justify-content-center align-items-center" style={{
                        background: "rgba(255,255,255, 0.1)",
                        backdropFilter: "blur(10px)",
                        minHeight: '100vh'
                    }}>
                        <div className="container">
                            <div className={`row d-flex justify-content-center`}>
                                <div className={`col-sm-6 d-flex justify-content-center align-items-center ${style.loginCardBg}`}>
                                    <div className="text-center">

                                        <img
                                            src="/era.png"
                                            className={`img-fluid`}
                                            width="250"
                                            height="250"
                                            alt="Picture"
                                        />
                                        
                                    </div>
                                </div>

                                <div className={`col-sm-6 ${style.loginCardBg}`} style={{ padding: "50px" }}>
                                    <div className="text-center">

                                        <img
                                            src="/password.svg"
                                            className={`img-fluid mb-4`}
                                            width="80"
                                            height="80"
                                            alt="Picture"
                                        />

                                        <h4 className={`${style.loginTag}`}>Please Login</h4>
                                    </div>
                                    <form>
                                        <TextField
                                            fullWidth
                                            type="text"
                                            name="username"
                                            label="User Name"
                                            value={username}
                                            onChange={handleChange}
                                            placeholder="Enter your User Name"

                                        />


                                        <TextField
                                            fullWidth
                                            type="password"
                                            name="password"
                                            label="Password"
                                            value={password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className="mt-4"
                                        />

                                        <div className="d-flex justify-content-center">
                                            <Button className={`${style.loginCardBgDark} mt-4`} type="submit" variant="contained" style={{ color: "#fff", outline: "none" }}>
                                                Login
                                            </Button>
                                        </div>

                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Login
