import React, { useState } from "react";
import SignUpForm from "../forms/SignUpForm";
import SignInForm from "../forms/SignInForm";
import "./LoginPage.css";
import { Modal } from "@mui/material";

export default function LoginPage(props) {
    const [loginFlag, setLoginFlag] = useState(true)
    const selectedStyle = { backgroundColor: "#6b5b95", color: "white" }
    const titleActiveStyle = { color: "white", borderBottom: "1px solid #6b5b95" }

    return (
        <Modal
            open={props.openLogin}
            onClose={props.handleCloseLogin}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className="login-container">
                <div className="appAside" />
                <div className="appForm">
                    <div className="pageSwitcher">
                        <button
                            className="pageSwitcherItem"
                            onClick={() => setLoginFlag(true)}
                            style={loginFlag ? selectedStyle : null}
                        >
                            Connexion
                        </button>
                        <button
                            style={loginFlag ? null : selectedStyle}
                            className="pageSwitcherItem"
                            onClick={() => setLoginFlag(false)}
                        >
                            Inscription
                        </button>
                    </div>

                    <div className="formTitle">
                        <p
                            className="formTitleLink"
                            style={loginFlag ? titleActiveStyle : null}
                            onClick={() => setLoginFlag(true)}
                        >
                            Connexion
                        </p>{" "}
                        ou{" "}
                        <p
                            onClick={() => setLoginFlag(false)}
                            style={loginFlag ? null : titleActiveStyle}
                            className="formTitleLink"
                        >
                            Inscription
                        </p>
                    </div>

                    {loginFlag ? <SignInForm /> : <SignUpForm />}
                </div>
            </div>
        </Modal>
    );
}
