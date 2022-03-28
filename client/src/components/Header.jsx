import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/swipe">About</Link>
        <Link to="/matches">Matches</Link>
        <Link to="/profile">Profile</Link>
      </nav>
    </header>
    )
}

export default Header
