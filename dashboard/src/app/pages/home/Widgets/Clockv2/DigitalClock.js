import React from 'react'

    // function component
const AnimatedCard = ({ position, animation, digit }) => {
    return(
        <div className={`flipCard ${position} ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const StaticCard = ({ position, digit }) => {
    return(
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {

    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit - 1;

    // to prevent a negative value
    if ( unit !== 'hours') {
        previousDigit = previousDigit === -1
            ? 59
            : previousDigit;
    } else {
        previousDigit = previousDigit === -1
            ? 23
            : previousDigit;
    }

    // add zero
    if ( currentDigit < 10 ) {
        currentDigit = `0${currentDigit}`;
    }
    if ( previousDigit < 10 ) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle
        ? previousDigit
        : currentDigit;
    const digit2 = !shuffle
        ? previousDigit
        : currentDigit;

    // shuffle animations
    const animation1 = shuffle
        ? 'fold'
        : 'unfold';
    const animation2 = !shuffle
        ? 'fold'
        : 'unfold';

    return(
        <div className={'flipUnitContainer'}>
            <StaticCard
                position={'upperCard'}
                digit={currentDigit}
            />
            <StaticCard
                position={'lowerCard'}
                digit={previousDigit}
            />
            <AnimatedCard
                position={'first'}
                digit={digit1}
                animation={animation1}
            />
            <AnimatedCard
                position={'second'}
                digit={digit2}
                animation={animation2}
            />
        </div>
    );
};

// class component
class FlipClock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hours: 0,
            hoursShuffle: true,
            minutes: 0,
            minutesShuffle: true,
            seconds: 0,
            secondsShuffle: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateTime(),
            50
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        // get new date
        const time = new Date();
        // set time units
        const hours = time.getHours();
        const minutes = time.getMinutes();
        // on hour chanage, update hours and shuffle state
        if( hours !== this.state.hours) {
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                hoursShuffle
            });
        }
        // on minute chanage, update minutes and shuffle state
        if( minutes !== this.state.minutes) {
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                minutesShuffle
            });
        }
    }

    render() {

        // state object destructuring
        const {
            hours,
            minutes,
            hoursShuffle,
            minutesShuffle,
        } = this.state;

        return(
            <div className={'flipClock'}>
                <FlipUnitContainer
                    unit={'hours'}
                    digit={hours}
                    shuffle={hoursShuffle}
                />
                <FlipUnitContainer
                    unit={'minutes'}
                    digit={minutes}
                    shuffle={minutesShuffle}
                />
            </div>
        );
    }
}

export default FlipClock