import React from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import HomeIcon from 'material-ui/svg-icons/action/home';
import IconMenu from "material-ui/IconMenu"
import MenuItem from "material-ui/MenuItem"
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import {actions} from '../../store/redux/header'

const BarMenu = () => (
  <IconMenu
    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="编辑"/>
    <MenuItem primaryText="退出登陆"/>
  </IconMenu>
)

class Header extends React.Component {
  state = {
    open: false
  }
  handleOpen = () => {
    debugger
    this.setState({open: true});
  }
  handleClose = () => {
    debugger
    this.setState({open: false});
  }
  render(){
    return (
      <AppBar title="BookMarks"
              iconElementLeft={<IconButton><HomeIcon /></IconButton>}
              iconElementRight={false ? <BarMenu/> : <FlatButton label="登陆" onTouchTap={this.handleOpen} />} >
        <Dialog title="登陆"
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}
        >
          登陆弹窗
        </Dialog>
      </AppBar>
    )
  }
}

// Header.propTypes = {
//   isLogin : React.PropTypes.bool.isRequired
// }
//
// const mapStateToProps = (state) => {
//   debugger
//   return { ...state }
// }


export default Header //connect(mapStateToProps)(Header)
