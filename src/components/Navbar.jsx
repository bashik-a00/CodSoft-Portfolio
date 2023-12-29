import '../style.css';

const Navbar = () =>{
  return (
    <nav className="navbar">
      <div>
        <a href="/">Home</a>
        <a href="/About">About</a>
        <a href="/skills">Skills</a>
        <a href="/contact">Contact</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  )
}

export default Navbar;