import React, {Component} from 'react';


class Count extends Component {    
    constructor(props) {
        super(props);
        console.log('COnstructur');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Current Props => ', this.props);
        console.log('Next Props => ', nextProps)
        // if(nextProps.count !== this.props.count) {
        //     return true;
        // }
        return true;
    }

    render() {
        console.log('Rendering Count Component')
        return(
            <div style={{fontSize: '48px'}}>{this.props.count}</div>
        )
    }
}

export default Count;