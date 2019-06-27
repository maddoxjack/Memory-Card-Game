import React from 'react';
import './MemoryCard.css';

class MemoryCardBack extends React.Component {
state = {
    isFlipped: false
}

    // clickHandler = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         isFlipped: true
    //     });
    //     console.log(this.state.isFlipped);
    // }

    render() {
        let memoryCardInnerClass = "MemoryCardInner"
        if (this.props.isFlipped === true) {
            memoryCardInnerClass = memoryCardInnerClass + " flipped"
            console.log(memoryCardInnerClass);
        }
        return (
            <div className="MemoryCard" onClick={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'><img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"></img></div>
                    <div className="MemoryCardFront">{this.props.symbol}</div>
                </div>
            </div>
        );
    }
}

export default MemoryCardBack