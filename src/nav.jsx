// Nav.js
function Nav() {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "red",
          padding: "1rem",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1.5rem",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ cursor: "pointer", color: "white" }}>Home</li>
          <li style={{ cursor: "pointer", color: "white" }}>About</li>
          <li style={{ cursor: "pointer", color: "white" }}>Contact</li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  