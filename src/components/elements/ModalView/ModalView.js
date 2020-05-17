import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Modal, 
  Backdrop, 
  Fade,
  Button
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { FormAdd } from '../../form';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: '20px',
    marginLeft: '10px',
    border: '1px solid rgb(24, 51, 88)',
    textTransform: 'none'
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid rgb(91, 181, 154)',
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalView() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Button
        className={classes.button}
        startIcon={<Add />}
        onClick={handleOpen}>
        Tambah Data
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <FormAdd
              id="transition-modal-description"
              handleClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </Fragment>
  );
}
