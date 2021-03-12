import React, { PureComponent } from 'react';

class PureClassComponent extends PureComponent {
    render() {
        console.log('****PureClassComponent render****');
        return (
            <div>
                PureClassComponent {this.props.name}
            </div>
        )
    }
}

export default PureClassComponent
