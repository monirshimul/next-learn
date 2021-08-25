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
        password: "",
        role:""

    });

    const { username, password, role } = user;

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const roleChange = (e) =>{
        console.log(e.target.value)
        setUser({ ...user, role : e.target.value})
    }

    const goNext = ()=>{
        console.log("the role",role)
        sessionStorage.setItem("role",role)
        role === "admin" ? router.push("/adminHome") : router.push("/userHome")
        
    }

    //console.log(user)
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

                                        <div className="text-center shadow-sm mt-3 p-3">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" onChange={roleChange} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="admin" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Admin</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" onChange={roleChange} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="user" />
                                                <label className="form-check-label" htmlFor="inlineRadio2">User</label>
                                            </div>
                                        </div>



                                        <div className="d-flex justify-content-center">
                                            <Button onClick={goNext} className={`${style.loginCardBgDark} mt-4`} variant="contained" style={{ color: "#fff", outline: "none" }}>
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
