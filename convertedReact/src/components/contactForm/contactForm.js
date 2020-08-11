import React, {Component} from "react";
import "./contactForm.css";
import "./bootstrap.css";
import contact from "./contact.png";

class contactForm extends Component {
    render() {
        return (
            <div>
                <section className="ftco-section bg-light" id="contact">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="wrapper">
                                    <div className="row no-gutters">
                                        <div className="col-md-7">
                                            <div className="contact-wrap w-100 p-md-5 p-4">
                                                <h3 className="mb-4" className="contactus">Contact Us</h3>
                                                <form method="POST" id="contactForm" name="contactForm" className="contactForm">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className="label" for="name">Full Name</label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    name="name"
                                                                    id="name"
                                                                    placeholder="Name"
                                                                    required="true" /></div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label className="label" for="email">Email</label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        name="email"
                                                                        id="email"
                                                                        placeholder="Email" /></div>
                                                                </div>
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label className="label" for="name">Phone Number</label>
                                                                        <input
                                                                            type="text"
                                                                            className="form-control"
                                                                            name="phone"
                                                                            id="name"
                                                                            placeholder="Phone Number"
                                                                            required="true" /></div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className="label" for="subject">Subject</label>
                                                                            <input
                                                                                type="text"
                                                                                className="form-control"
                                                                                name="subject"
                                                                                id="subject"
                                                                                placeholder="Subject"
                                                                                required="true" /></div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <label className="label" for="#">Message</label>
                                                                                <textarea
                                                                                    name="message"
                                                                                    className="form-control"
                                                                                    id="message"
                                                                                    cols="30"
                                                                                    rows="4"
                                                                                    placeholder="Message"
                                                                                    required="true"></textarea>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-12">
                                                                            <div className="form-group">
                                                                                <input value="Send Message" type="submit" className="btn btn-primary" />

                                                                                    <div className="submitting"></div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-5 d-flex align-items-stretch">
                                                                <div
                                                                    className="info-wrap w-100 p-5 img"
                                                                    style={{"backgroundImage":`url(${contact})`,"backgroundRepeat":"no-repeat","width":"90%","borderRadius":"2px"}}></div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                                );
    }
}

export default contactForm;