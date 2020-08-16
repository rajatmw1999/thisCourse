import React, {Component} from "react";
import "./contactUs.css";

class contactUs extends Component {
    render() {
        return (
            <div>
                <section className="form">
                    <div className="contact-child child">
                        <div className="inside-contact">
                            <h3>
                                <span id="confirm"></span>
                            </h3>

                            <input id="txt_name" type="text" Required="required" placeholder="Full Name"/>

                            <input id="txt_email" type="text" Required="required" placeholder="Email"/>

                            <input id="txt_phone" type="text" Required="required" placeholder="Phone"/>

                            <input id="txt_subject" type="text" Required="required" placeholder="Subject"/>

                            <textarea
                                id="txt_message"
                                rows="4"
                                cols="20"
                                Required="required"
                                placeholder="Your Message"></textarea>

                            <input type="submit" id="btn_send" value="SEND"/></div>
                    </div>
                </section>

            </div>
        );
    }
}

export default contactUs;