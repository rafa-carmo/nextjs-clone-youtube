import { Avatar, Button, Hidden, makeStyles } from "@material-ui/core"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'

import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from '@material-ui/icons/Search'
import Brightness7Icon from '@material-ui/icons/Brightness4'
import Brightness4Icon from '@material-ui/icons/Brightness4'

import { AccountCircle, Apps, MoreVert, VideoCall } from "@material-ui/icons"
import { signIn,  signOut, useSession } from "next-auth/client"
import useSettings from "src/hooks/useSettings"
import { THEMES } from 'src/utils/constants'



const useStyles = makeStyles((theme) => ({

  root: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer +1,
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    minHeight: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    cursor: 'pointer',
    height: 18,
    marginLeft: theme.spacing(3)
  },
  search: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    height: 35,
    width: 700
  },
  input: {
    paddingLeft: '13px' ,
    flex: 1
  }

  }))

function TopBar() {
  const classes = useStyles()
  const [session] = useSession()
  const {settings, saveSettings} = useSettings()
    return (
      <AppBar className={classes.root} color="default">

        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <MenuIcon />
            <img src={settings.theme === THEMES.DARK ? "/new-youtube-logo-white.png" : "/new-youtube-logo.svg"} alt="logo" className={classes.logo}/>
          </Box> 

          <Hidden mdDown>
          <Box>
          <Paper component="form" className={classes.search}>
              <InputBase
                className={classes.input}
                placeholder="Pesquisar"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>

          </Hidden>

          
          <Box>
            <IconButton className={classes.icons}>
              {settings.theme === THEMES.DARK ? (
                <Brightness7Icon onClick={()=> saveSettings({theme: THEMES.LIGHT})} />
              ):(<Brightness4Icon onClick={()=> saveSettings({theme: THEMES.DARK})} />)}
              
              
            </IconButton>
            <IconButton className={classes.icons}>
              <VideoCall />
            </IconButton>
            <IconButton className={classes.icons}>
              <Apps />
            </IconButton>
            <IconButton className={classes.icons}>
              <MoreVert />
            </IconButton>
              {!session ? (
                    
                <Button
                color="secondary"
                component="a"
                variant="outlined"
                startIcon={<AccountCircle />}
                onClick={() => signIn('google')}
              >
                Fazer Login
              </Button>
              ) : (
                
            <Button display="flex" alignItems="center">
            <Avatar 
              onClick={()=>signOut()}
              alt="User"
              className={classes.avatar}
              src={session?.user?.image}
            />
          </Button>
              )}
          </Box>
        </Toolbar>
      </AppBar>
    )
}

export default TopBar
