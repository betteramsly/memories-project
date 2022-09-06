import { createTheme } from '@mui/material';
import { makeStyles } from '@mui/styles'

const theme = createTheme();
export default makeStyles(() => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
}))
