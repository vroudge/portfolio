import React, { Component, PropTypes } from 'react';
import Banner from './layout/Banner';


class Services extends Component {

    render() {
        return (
            <div>
                <Banner />
                <div className="services">

                    <h3>Prototypes</h3>

                    <p>So you've got an idea? I'd be happy to help you create it from scratch and help you validate your
                        product.</p>

                    <p>I will always deliver maintainable code so your idea can grow as high as the moon!</p>

                </div>

                <div className="services">

                    <h3>Web Apps</h3>

                    <p>Whether you are a Start-up or a bigger company, I can help you build a production-ready app.</p>

                    <p>No overengineering bullsh*t, I'll use the best technology for your business and will make the
                        product scalable, sexy and maintainable.</p>

                </div>

            </div>
        );
    }
}

export default Services;
