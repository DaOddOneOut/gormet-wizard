import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import gwiz from '../assets/infused_TT.png'

// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <img src= {gwiz} width="7%" height="7%"/>
        <Link to="/" className="brand">
          <h1>Gourmet Wizard</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}