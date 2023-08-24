import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {FiLogOut} from 'react-icons/fi'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <Link className="link" to="/">
        <img className="logo" src={websiteLogo} alt="website logo" />
      </Link>
      <ul className="sm-nav-items-container">
        <li className="nav-item">
          <Link className="link" to="/">
            <AiFillHome className="home-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="link" to="/jobs">
            <BsFillBriefcaseFill className="jobs-icon" />
          </Link>
        </li>
        <li className="nav-item">
          <FiLogOut className="logout-icon" onClick={onClickLogOut} />
        </li>
      </ul>
      <ul className="lg-nav-items-container">
        <Link className="link" to="/">
          <li className="nav-item">Home</li>
        </Link>
        <Link className="link" to="/jobs">
          <li className="nav-item">Jobs</li>
        </Link>
        <li className="nav-item nav-btn">
          <button type="button" className="logout-btn" onClick={onClickLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
