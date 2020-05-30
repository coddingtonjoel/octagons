import React, { useState } from "react";
import scroll from "../images/scroll.svg";
import MediaQuery from "react-responsive";

const Contact = () => {
    const [submit, setSubmit] = useState("send message");
    const [name, setName] = useState("Error");
    const [email, setEmail] = useState("Error");
    const [message, setMessage] = useState("Error");

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(
            <div class="btn-spinner preloader-wrapper small active">
                <div class="spinner-layer">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="gap-patch">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
        );

        fetch("https://octagons.herokuapp.com/send", {
            //fetch("http://localhost:5000/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                user: {
                    name: name,
                    email: email,
                    message: message,
                },
            }),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((json) => console.log(json))
            .catch((a) => {
                console.log("Email Send Attempted . . .");
                window.location.href = "/submitted";
            });
    };

    return (
        <div className="contact">
            <div className="heading-container">
                <h3 className="heading-white">contact us</h3>
            </div>
            <form
                action="/submitted"
                name="email"
                onSubmit={handleSubmit}
                className="contact-form container">
                <div className="contact-form-item-container">
                    <div className="input-field">
                        <input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            id="name"
                            className="contact-form-name"
                            type="text"
                            placeholder="Full Name"
                            required
                        />
                        <label for="name">name*</label>
                    </div>
                    <div className="input-field">
                        <input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            id="email"
                            className="contact-form-email"
                            type="email"
                            placeholder="e.g. hello@contact.net"
                            required
                        />
                        <label for="email">email*</label>
                    </div>
                    <div className="input-field">
                        <textarea
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                            id="message"
                            className="materialize-textarea contact-form-message"
                            placeholder="Your Message Here"></textarea>
                        <label for="message">message*</label>
                    </div>
                </div>

                <div className="contact-form-button-container">
                    <button className="contact-form-button">{submit}</button>
                </div>
            </form>
            <div className="contact-copyright white-text center">
                <p>Octagons© 2020</p>
            </div>
            <MediaQuery minDeviceWidth={701}>
                <a onClick={toTop} href="#!" className="scroll">
                    <img src={scroll} alt="" />
                </a>
            </MediaQuery>
        </div>
    );
};

export default Contact;
