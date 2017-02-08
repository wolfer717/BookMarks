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
import {userLogin, openDialog, closeDialog} from '../../store/rootReducer'

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
  actions = [
    <FlatButton
      label="取消"
      primary={true}
      onTouchTap={this.props.closeDialog}
    />,
    <FlatButton
      label="登陆"
      primary={true}
      keyboardFocused={true}
      onTouchTap={this.props.userLogin}
    />,
  ]
  onLogin = () => {

  }
  render(){
    const { isLogin, isOpen, closeDialog, openDialog} = this.props
    return (
      <AppBar title="BookMarks"
              iconElementLeft={<IconButton><HomeIcon /></IconButton>}
              iconElementRight={isLogin ? <BarMenu/> : <FlatButton label="登陆" onTouchTap={openDialog} />} >
        <Dialog title="登陆"
                modal={false}
                open={isOpen}
                actions={this.actions}
                onRequestClose={closeDialog}
        >
          登陆弹窗
        </Dialog>
      </AppBar>
    )
  }
}

Header.propTypes = {
  isLogin : React.PropTypes.bool.isRequired,
  isOpen: React.PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  isLogin: state.root.isLogin,
  isOpen: state.root.isOpen
})

const mapActionCreators = {
  userLogin,
  openDialog,
  closeDialog
}


export default connect(mapStateToProps, mapActionCreators)(Header)
