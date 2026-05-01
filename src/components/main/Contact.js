import React from "react";
import Collapse from "react-bootstrap/Collapse";
import FormItem from "../form-items/formItem";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', message: '' };
    }

    handleNameChange    = (e) => this.setState({ name: e.target.value });
    handleEmailChange   = (e) => this.setState({ email: e.target.value });
    handleMessageChange = (e) => this.setState({ message: e.target.value });

    sendMail = (e) => {
        e.preventDefault();
        // TODO: wire up email service (e.g. EmailJS or AWS SES)
        alert(`Thanks ${this.state.name}! I'll get back to you soon.`);
        this.setState({ name: '', email: '', message: '' });
    };

    render() {
        return (
            <Collapse in={this.props.components.contact}>
                <div id="contact" className="section-wrap">
                    <div className="section-header contact-header text-white">
                        <h2><i className="fas fa-envelope mr-2" />Contact</h2>
                        <p className="mb-0">Have a project in mind? Let's talk.</p>
                    </div>
                    <div className="section-body">
                        <div className="subsection-label">Send a Message</div>

                        {/* Quick contact links */}
                        <div className="d-flex flex-wrap mb-4" style={{gap: '10px'}}>
                            <a href="mailto:muhammadabubakarkhan1234@gmail.com" className="btn-dl-resume">
                                <i className="fas fa-envelope" /> muhammadabubakarkhan1234@gmail.com
                            </a>
                            <a href="https://wa.me/923200030321" target="_blank" rel="noopener noreferrer" className="btn-dl-resume">
                                <i className="fab fa-whatsapp" /> WhatsApp
                            </a>
                            <a href="https://www.linkedin.com/in/muhammad-abubakar-795b45252/" target="_blank" rel="noopener noreferrer" className="btn-dl-resume">
                                <i className="fab fa-linkedin" /> LinkedIn
                            </a>
                            <a href="https://github.com/25abubakar" target="_blank" rel="noopener noreferrer" className="btn-dl-resume">
                                <i className="fab fa-github" /> GitHub
                            </a>
                        </div>

                        <form className="contact-form" onSubmit={this.sendMail}>
                            <FormItem
                                elementType="input"
                                id="name" type="text"
                                placeholder="Your Name"
                                icon="user"
                                value={this.state.name}
                                onValueChange={this.handleNameChange}
                            />
                            <FormItem
                                elementType="input"
                                id="emailid" type="email"
                                placeholder="Your Email"
                                icon="envelope"
                                value={this.state.email}
                                onValueChange={this.handleEmailChange}
                            />
                            <FormItem
                                elementType="textarea"
                                id="messagetext"
                                placeholder="Your Message"
                                icon="comment-alt"
                                value={this.state.message}
                                onValueChange={this.handleMessageChange}
                            />
                            <button type="submit" className="btn-send">
                                <i className="fas fa-paper-plane mr-2" />Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </Collapse>
        );
    }
}

export default Contact;
