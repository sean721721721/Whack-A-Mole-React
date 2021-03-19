import React from 'react';
import Mole from './Mole';

const Hole = React.forwardRef((props, ref) => {
    const { index } = props;

    return (
        <div ref={ref} className={`hole hole${index}`}>
            <Mole />
        </div>
    )
})

export default Hole;