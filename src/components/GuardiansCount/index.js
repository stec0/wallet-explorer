import React from 'react';
import './styles.css';
// components
import { Typography } from '@material-ui/core';

const GuardiansCount = ({guardians}) => (
    <div className="guardians-count">
        <Typography>Number of guardians</Typography>
        <Typography variant="h4">{guardians.length}</Typography>
    </div>
)

export default GuardiansCount;
