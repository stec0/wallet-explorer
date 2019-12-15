import React from 'react';
import './styles.css';
// components
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ArrowForward from '@material-ui/icons/ArrowForwardIos';

const WalletInput = ({wallet, handleWalletInfo, handleWalletChange, handleKeyDown}) => (
    <div className="input">
          <Typography className="message" >Enter your wallet address :</Typography>
          <div className="wrap">
              <TextField 
                className="wallet" 
                id="outlined-basic" 
                variant="outlined" 
                onKeyDown={handleKeyDown} 
                value={wallet} 
                onChange={(e) => {handleWalletChange(e.target.value)}}
              />
              <Button 
                className="button" 
                variant="outlined" 
                onClick={()=>{handleWalletInfo(wallet)}}
              >
                <ArrowForward/>
                <ArrowForward/>
                <ArrowForward/>
              </Button>
          </div>
      </div>
)

export default WalletInput;
