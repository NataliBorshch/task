import React from 'react';
//materia
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
// component
import FormCreateTask from '../FormCreateTask/FormCreateTask';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    background: 'rgba(51, 49, 119, 0.603)',
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Fab onClick={handleOpen} aria-label="add">
        <AddIcon
          style={{
            color: 'rgba(51, 49, 119, 0.603)',
          }}
        />
      </Fab>
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
        <Fade
          in={open}
          style={{
            background: 'linear-gradient(45deg, #1d1957, #c4d2da)',
            borderRadius: '5px ',
          }}
        >
          <div className={classes.paper}>
            <FormCreateTask />
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
