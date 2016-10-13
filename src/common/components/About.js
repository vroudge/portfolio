import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Repos from './about/Repos';

import Loader from './layout/Loader';
import Banner from './layout/Banner';

class About extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchReposIfNeeded();
    }

    render() {
        const { results, isFetching, lastUpdated, error } = this.props;
        return (
            <div>

                <Banner />

                <div className="about">

                    <h3>About Me</h3>

                    <p>I'm 25. After spending some time doing C# and PHP, I've gone Fullstack for now 5 years. I've been
                        an AngularJS and Nodejs early adopter ; I've created the first WebGL oculus game based on
                        nodejs.</p>

                    <p>I work as a freelancer and only pick jobs in startups that offer cool pitches.</p>
                    <p>I travel the world as a remote worker.</p>
                    <p>I'm a Pomodoro user, love agile environments, and <b>I love JS.</b></p>

                    <p>Over the years, I have developed web apps for some start-ups (
                        <a href="http://www.cubyn.com" target="_blank">Cubyn</a>,
                        <a href="http://beekast.com/" target="_blank">Beekast</a>,
                        <a href="https://www.soundsgood.co/" target="_blank">Soundsgood</a>,
                        <a href="http://www.frichti.co/" target="_blank">Frichti</a>)
                        and for bigger companies (
                        <a href="http://www.sollyazar.com/" target="_blank">Solly Azar</a>
                         or <a href="http://www.qa.visibay.com" target="_blank">Visibay</a>).
                    </p>
                </div>

                <div className="repos">
                    <h3><a href="https://github.com/vroudge?tab=repositories" target="_blank">My GitHub</a> Repos
                    </h3>
                    {isFetching && results.length === 0 &&
                     <Loader />
                    }
                    {!isFetching && error && results.length === 0 &&
                     <h3 className="post-error">There has been an Error</h3>
                    }
                    {!isFetching && !error && results.length === 0 &&
                     <h3>Empty</h3>
                    }
                    {results.length > 0 &&
                     <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                         <Repos results={results}/>
                     </div>
                    }
                </div>

            </div>
        );
    }
}

About.propTypes = {
    results: PropTypes.array.isRequired,
    error: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired
};

export default About;
