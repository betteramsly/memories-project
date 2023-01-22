import { makeStyles } from '@mui/styles'
import { createTheme } from '@mui/system'

const theme = createTheme()
export default makeStyles(() => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px'
  },

  pagination: {
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px'
  },

  mainContainer: {
    justifyContent: 'space-between'
  },

  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse !important'
    }
  },

  searchButton: {
    marginTop: '10px !important'
  }
}))
