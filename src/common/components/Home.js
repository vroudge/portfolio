import React, { Component } from 'react';
import Banner from './layout/Banner';

class Home extends Component {

    constructor(props) {
        super(props);
        this.eventToggleSidebar = this.eventToggleSidebar.bind(this)
    }

    eventToggleSidebar(e) {
        e.preventDefault();
        this.props.toggleSidebar(!this.props.layout.sidebarOpen);
    }

    render() {

        return (

            <div className="posts">

                <div className="post banner">
                    <h1 className="post-title">I ship <em>quality-focused</em>, <em>maintainable</em> and <em>UX-oriented</em>
                        web apps.</h1>
                    <p>for <em>start-ups</em>, <em>big companies</em> and sometimes, <em>myself</em>. <a href="#"
                                                                                                         onClick={this.eventToggleSidebar}>
                        Discover more!</a></p>

                </div>

                <div className="post clearfix">

                    <h2>I've done stuff with...</h2>

                    <div className="skill-item clearfix">
                        <h4>Front End JS</h4>
                        <ul className="">
                            <li><em>ES6/7</em></li>
                            <li><em>React</em>
                                <ul>
                                    <li><em>Redux</em></li>
                                </ul>
                            </li>
                            <li><em>AngularJS</em></li>
                            <li><em>WebGL</em></li>
                        </ul>
                    </div>


                    <div className="skill-item clearfix">
                        <h4>Back-End JS</h4>
                        <ul>
                            <li><em>Node.js</em>
                                <ul>
                                    <li><em>Express</em></li>
                                    <li><em>Sails</em></li>
                                </ul>
                            </li>
                            <li><em>PostgreSQL</em></li>
                            <li><em>Redis</em></li>
                        </ul>
                    </div>

                    <div className="skill-item clearfix">
                        <h4>Testing</h4>
                        <ul>
                            <li><em>Moccha</em></li>
                            <li><em>Chai</em></li>
                            <li><em>Enzyme</em></li>
                            <li><em>Sinon</em></li>
                            <li><em>Jasmine</em></li>
                        </ul>
                    </div>

                    <div className="skill-item clearfix">
                        <h4>Deployment</h4>
                        <ul className="clearfix">
                            <li><em>Nginx</em></li>
                            <li><em>Webpack</em></li>
                            <li><em>Gulp</em></li>
                            <li><em>Grunt</em></li>
                            <li><em>Jenkins</em></li>
                        </ul>
                    </div>

                </div>


                <div className="post clearfix">

                </div>

                <Banner />

            </div>

        );
    }
}

export default Home;
