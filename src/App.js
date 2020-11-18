import React from 'react';
import './App.scss';
import Form from "./Form";
import Modal from "./Modal";
import Header from "./Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsVisible: false,
            modalMessageIsVisible: false,
            modalMessageText: '',
            scrollFirstScreen: false
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFirstScreenDetection = this.scrollFirstScreenDetection.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFirstScreenDetection = this.scrollFirstScreenDetection.bind(this));
    }

    scrollFirstScreenDetection() {
        const FIRSTSCREENHEIGHT = 760;
        this.setState({scrollFirstScreen: (window.pageYOffset > FIRSTSCREENHEIGHT)});
    }

    showModal = (e) => {
        this.setState({
            modalIsVisible: !this.state.modalIsVisible
        });
    };
    showModalMessage = (e, message) => {
        this.setState({
            modalMessageText: message
        });
        this.setState({
            modalMessageIsVisible: !this.state.modalMessageIsVisible
        });
    };

    render() {
        return (
            <>
                <Header closeModal={e => {
                    this.showModal()
                }}/>
                <div className="section section1">
                    <div className="container section1__container">
                        <h1 className="section__header section1__header">A platform for building
                            <br/>healthcare solutions using
                            <br/><span className="bold">openEHR standards</span></h1>
                        <div className="section1__infogr"/>
                        <div className="section1__buttons">
                            <button className="btn btn_contour-white">
                                Try in cloud
                            </button>
                            <button className="btn btn_white"
                                    onClick={e => {
                                        this.showModal();
                                    }}>
                                Request a demo
                            </button>
                        </div>
                    </div>
                </div>
                <span id="cases"/>
                <div className="section section2">
                    <div className="container section2__container">
                        <h2 className="section__header">EHR DB Use Cases</h2>

                        <div className="blocks">
                            <div className="blocks__item">
                                <div className="blocks__image">
                                </div>
                                <div className="blocks__title">
                                    EHR DB for storage
                                </div>
                                <div className="blocks__text">
                                    EHR DB allows to create a long-term CDR (Clinical Data Repository) storage for
                                    patient records using openEHR standard. It can be scaled from a single medical
                                    organisation to a regional level.
                                </div>
                            </div>
                            <div className="blocks__item">
                                <div className="blocks__image">
                                </div>
                                <div className="blocks__title">
                                    EHR DB for applications
                                </div>
                                <div className="blocks__text">
                                    EHR DB provides a set of services (SDK) allowing to create business healthcare
                                    applications like doctor's user interface, mobile applications, backend application
                                    with specific domain logic involved in healthcare process.
                                </div>
                            </div>
                            <div className="blocks__item">
                                <div className="blocks__image">
                                </div>
                                <div className="blocks__title">
                                    EHR DB for analytics
                                </div>
                                <div className="blocks__text">
                                    EHR DB provide a set of tools allowing to analyse clinical data at population level.
                                </div>
                            </div>
                        </div>

                        <div className="example">
                        </div>
                    </div>
                </div>
                <span id="architecture"/>
                <div className="section section3">
                    <div className="container section3__container">
                        <h2 className="section__header section3__header">EHR DB Architecture</h2>
                        <p className="section3__text">EHR DB is a backend application build with Java on top of <span className="emphasis">PostgreSQL,
                            ElasticSearch, Apache
                            Cassandra</span> for maximum performance speed and unlimited scalability.
                        </p>
                        <div className="architecture">
                            <div className="architecture__column">
                                <div className="architecture__header">
                                    <div className="architecture__header-text">Storage</div>
                                </div>
                                <div className="architecture__body">
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Multitenant</div>
                                        EHR DB is build using multitenant archetecture allowing to run service on a single hardware for multiple tenants or projects. The feature allows to deploy a cloud solution.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Security & Access Control</div>
                                        OAuth2 and flexible security management to access data or administrator features.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">openEHR Templates</div>
                                        Allows to manage openEHR template versions and convert to application readable formats like XML, TDD or JSON representation.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">openEHR Clinical storage</div>
                                        Allows to store and retrieve openEHR clinical data like EHR, Composition, Folders. openEHR Reference Model 1.0.4 supported, support for BMM coming soon. Support
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">AQL queries</div>
                                        Allows to run ad-hoc and streaming AQL queries against single or multiple EHR.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Audit and logging</div>
                                        Allows to log and audit all the events.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">System management and UI dashboard</div>
                                        Provides REST API and User interface for system management.
                                    </div>
                                </div>
                            </div>
                            <div className="architecture__column">
                                <div className="architecture__header">
                                    <div className="architecture__header-text">Tools</div>
                                </div>
                                <div className="architecture__body">
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Views</div>
                                        Allow to create a stored procedures using AQL and JavaScript.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Storage</div>
                                        Allows to move clinical data based on AQL query to external RDBMS storage and keep it realtime synchronised allowing business application to use it.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Application resources</div>
                                        Allows to store forms resources or tags from external applications.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Drafts</div>
                                        Allows to store a temporal application data before sending it to the server.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Triggers</div>
                                        Allows to subscribe with AQL or JavaScript for clinical events and notify external service with formatted object.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">Clinical Data Migration</div>
                                        Allows to import data from external openEHR CDR storages. Multiple drivers supported.
                                    </div>
                                    <div className="architecture__item">
                                        <div className="architecture__item-icon"></div>
                                        <div className="architecture__item-title">API Client libraries</div>
                                        Allows easy integration with native Java Client library and OpenAPI.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <span id="contact" name="contact"/>
                <div className="footer">
                    <div className="container footer__container">
                        <div className="copyright">
                            <div className="copyright__picture">
                                <div className="copyright__text1">Solutions</div>
                                <div className="copyright__text2">Electronic
                                    Health
                                    Record
                                </div>
                            </div>
                            <div className="copyright__caption">
                                <span>Copyright 2020</span>
                                <div className="logo-small"/>
                            </div>
                        </div>
                        <Form onSubmit={this.showModalMessage} type="QUESTION"/>
                    </div>

                </div>
                <Modal onClose={this.showModal} show={this.state.modalIsVisible}>
                    <Form classes="light" onClose={this.showModal} onSubmit={this.showModalMessage} type="DEMO"/>
                </Modal>
                <Modal onClose={this.showModalMessage} show={this.state.modalMessageIsVisible}>
                    <div className="modal__message">{this.state.modalMessageText}</div>
                </Modal>
            </>
        );
    }
}

export default App;
