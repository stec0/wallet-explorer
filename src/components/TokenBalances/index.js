import React from 'react';
import './styles.css';
// components
import { Typography } from '@material-ui/core';
// constants
import { myFavoriteTokens } from "../../constants";

const TokenBalances = ({tokenBalance}) => (
    <div className="token-balances">
        <Typography>ERC20 tokens</Typography>
        {
            Object.keys(tokenBalance).length === 0 ? 
            <Typography variant="h6">Nothing to see here...</Typography> :
            myFavoriteTokens.map(
                ({name}) => {
                return(tokenBalance[name] ?
                    <div key={name} className="wrap-token">
                        <Typography variant="h4">{name + " " + tokenBalance[name]}</Typography>
                    </div> : null
                );
                }
            )
        }
    </div>
)

export default TokenBalances;
