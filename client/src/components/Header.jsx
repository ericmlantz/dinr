import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className = "navBar">
      <nav>
        <Link className = "page-link" to="/">Home</Link>
        <Link className = "page-link" to="/swipe">Swipe</Link>
        <Link className = "page-link" to="/profile">Profile</Link>
        <Link className = "page-link" to="/matches">Matches</Link>
      </nav>
    </header>
    )
}

export default Header
