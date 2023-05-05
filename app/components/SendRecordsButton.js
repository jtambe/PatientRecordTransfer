import * as React from 'react';
import Button from '@mui/material/Button';
import ConfirmDialog from './ConfirmDialog';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function SendRecordsButton({ provider, currentPatient, facility }) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDialogClose = () => {
    setDialogOpen(false);
    setOpen(true);
  };

  const handleDialogConfirm = (consentFile) => {
    console.log('Sending medical records to provider', provider.name, 'with consent file', consentFile);
  };

  const handleButtonClick = () => {
    setDialogOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const isDisabled = currentPatient && currentPatient.medicalRecords?.length > 0

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleButtonClick} disabled={isDisabled ? false : true}>
        Send Records
      </Button>
      <ConfirmDialog currentPatient={currentPatient} provider={provider} facility={facility} open={dialogOpen} handleClose={handleDialogClose} handleConfirm={handleDialogConfirm} />
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Patient Files were transferred
        </Alert>
      </Snackbar>
    </div>
  );
}
