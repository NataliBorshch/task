import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { styles } from '@material-ui/pickers/views/Calendar/Calendar';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
    color: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: 'white',
    background: 'inherit',
  },

  padding: {
    padding: '0px',
  },

  button: {
    background: 'red',
  },
}));

export default function SimpleSelect({ status, handleChange }) {
  const classes = useStyles();
  function createSelect(array) {
    return array.map(option => {
      return (
        <MenuItem
          key={option.value}
          value={option.value}
          width="100%"
          className={styles.select}
        >
          {option.label}
        </MenuItem>
      );
    });
  }
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">STATUS</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          onChange={handleChange}
          className={classes.select}
        >
          {createSelect(ranges)}
        </Select>
      </FormControl>
    </div>
  );
}

const ranges = [
  {
    value: 'TODO',
    label: 'TODO',
  },
  {
    value: 'READY',
    label: 'READY',
  },
  {
    value: 'IN PROGRESS',
    label: 'IN PROGRESS',
  },
  {
    value: 'COMPLETED',
    label: 'COMPLETED',
  },
];
