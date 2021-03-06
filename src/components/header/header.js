import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'
import {selectCartHidden} from '../../redux/cart/cart-selectors'
import {selectCurrentUser} from '../../redux/user/user-selector'

const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link to="/">
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link to="/shop" className='option'>
                SHOP
            </Link>

            <Link to="/contact" className='option'>
                CONTACT
            </ Link>
            {
                currentUser ?
                (<div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }   
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)