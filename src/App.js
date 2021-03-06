import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import Header from './components/header/header'
import CheckoutPage from './pages/checkout/checkout'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user_actions'
import {selectCurrentUser} from './redux/user/user-selector'



class App extends React.Component {
  unSubscribeFromAuth = null

  componentDidMount(){
const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        
      }else{
        setCurrentUser(userAuth)
      }
    })
  }

    componentWillUnmount() {
      this.unSubscribeFromAuth()
    }

  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path='/' component={HomePage} exact={true} />
          <Route path='/shop' component={ShopPage}/>
          <Route path='/checkout' component={CheckoutPage} exact={true}/> 
          <Route path='/signin' render={() => 
            this.props.currentUser ? (
                <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage />
                )
              } exact={true}/> 
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
