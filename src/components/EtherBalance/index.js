import React from 'react';
import './styles.css';
// components
import { Typography } from '@material-ui/core';

const EtherBalance = ({balance}) => (
    <div className="ether-balance">
          <Typography>Wallet Balance</Typography>
          <div className="wrap-ether">
            <Typography variant="h4">{balance + " ETH"}</Typography>
          </div>
    </div>
)

export default EtherBalance;
