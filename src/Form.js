import React, {Component} from "react";
import TextField from "./Textfield";
import classNames from "classnames";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                eMail: '',
                phone: '',
                message: '',
                type: this.props.type
            },
            fields_test: {
                name: '',
                eMail: '',
                phone: '',
                message: '',
                type: this.props.type
            },
            errors: {},
            wasSubmitted: false
        }
    }

    componentDidMount() {

        if (this.props.type === "DEMO" || "QUESTION") {
/*            let f = {...this.state.fields};
            f.type = this.props.type;
            console.log(f);
            this.setState({fields: f});*/
        }
    }

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };
    onSubmit = (e, message) => {
        this.props.onSubmit && this.props.onSubmit(e, message);
    };

    handleChange(field, e) {
        console.log(this.state.fields);
        //let fields = this.state.fields;
        let f = {...this.state.fields};

        //fields[field] = e.target.value;
        f[field] = e.target.value;
        this.setState({fields: f});

        //this.setState({fields: {}});

        console.log(this.state.fields);
        //console.log(fields);
        console.log(f);
        console.log('}');


        if (this.state.wasSubmitted) {
            this.fieldValidation(e);
        }
    }

    fieldValidation(e) {
        let fields = this.state.fields;
        //let errors = this.state.errors;
        let errors = this.state.errors;

        if (e.target.name === "name") {
            if (!fields["name"]) {
                errors["name"] = "Cannot be empty";
                //this.setState({errors: errors});

            } else if (typeof fields["name"] !== "undefined") {
                if (fields["name"].length > 100) {
                    errors["name"] = "Name is too long";
                } else {
                    errors["name"] = "";
                }
            }
        }

        if (e.target.name === "eMail") {
            if (!fields["eMail"]) {
                errors["eMail"] = "Cannot be empty";
            } else if (typeof fields["eMail"] !== "undefined") {
                let lastAtPos = fields["eMail"].lastIndexOf('@');
                let lastDotPos = fields["eMail"].lastIndexOf('.');

                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["eMail"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["eMail"].length - lastDotPos) > 2)) {
                    errors["eMail"] = "Email is not valid";
                } else {
                    errors["eMail"] = "";
                }
            }
        }
        this.setState({errors});
        //this.setState({errors, fields});
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
            this.setState({errors: errors});

        } else if (typeof fields["name"] !== "undefined") {
            if (fields["name"].length > 100) {
                formIsValid = false;
                errors["name"] = "Name is too long";
            }
        }

        if (!fields["eMail"]) {
            formIsValid = false;
            errors["eMail"] = "Cannot be empty";
        }

        if (typeof fields["eMail"] !== "undefined") {
            let lastAtPos = fields["eMail"].lastIndexOf('@');
            let lastDotPos = fields["eMail"].lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["eMail"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["eMail"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["eMail"] = "Email is not valid11";
            }
        }

        this.setState({errors: errors});
        this.setState({wasSubmitted: true});
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            const response = fetch('/message', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(this.state.fields),
            });
            response.then(res => {
                if (res.status === 429) {
                    this.onSubmit(e, ['We have already recieved your request!',
                        <br/>, 'We will get back to you as soon as possible']);
                    this.onClose(e);
                } else {
                    console.log("Form submitted", res);
                    this.onSubmit(e, ['Thank you for your request!',
                        <br/>, 'We will get back to you as soon as possible']);
                    this.onClose(e);
                }
            }, rej => {
                console.log("Error in request ", rej);
                this.onSubmit(e, ['Oops! Something went wrong.',
                    <br/>, 'Please feel free to send us an email to eleonov@solit-clouds.ru. We will get back to you as soon as possible']);
                this.onClose(e);
            })

        } else {
            console.log("Form has errors.");
        }
    }

    render() {
        return (
            <>
                <form name="contactform" className={classNames("form", this.props.classes)}
                      onSubmit={this.contactSubmit.bind(this)}>
                    <h3 className="form__header">Have a question about EHR DB?</h3>
                    <div className="form__caption">
                        Please let us know here and we will get back to you very quickly
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col-2">
                            <TextField name="name"
                                       placeholder="Name"
                                       required
                                       onChange={this.handleChange.bind(this, "name")}
                                       error={this.state.errors["name"]}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col-2 is-nessesary">
                            <TextField name="eMail"
                                       placeholder="E-mail"
                                       required
                                       onChange={this.handleChange.bind(this, "eMail")}
                                       error={this.state.errors["eMail"]}
                            />
                        </div>
                        <div className="form__col form__col-2">
                            <TextField name="phone"
                                       placeholder="Phone"
                                       onChange={this.handleChange.bind(this, "phone")}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col">
                            <textarea name="message" className="textarea"
                                      placeholder="Message"
                                      onChange={this.handleChange.bind(this, "message")}
                            />
                        </div>
                    </div>
                    <div className="form__row">
                        <div className="form__col form__col_flex">
                            <button className="btn btn_primary">Submit</button>
                            <div className="form__legend">* - Fields are required</div>
                        </div>
                    </div>
                </form>
            </>
        )
    }
}

export default Form;
