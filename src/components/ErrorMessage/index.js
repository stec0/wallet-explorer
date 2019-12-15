import React from 'react';
//components
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';


const ErrorMessage = ({snackOpen, error, handleClose}) => (
    <Snackbar
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
        }}
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        ContentProps={{
        'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{error}</span>}
        action={[
        <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        ]}
  />
);

export default ErrorMessage;
