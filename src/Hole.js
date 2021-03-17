import React, { useEffect, useRef } from 'react';
import Mole from './Mole';
import { useSelector, useDispatch } from 'react-redux';

const Hole = React.forwardRef((props, ref) => {
    const { index } = props;

    return (
        <div ref={ref} className={`hole hole${index}`}>
            <Mole />
        </div>
    )
})

export default Hole;