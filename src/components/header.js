import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <div
    style={{
      background: 'gray',
      marginBottom: '1.45rem',
      marginTop:'0px',
      display:'block',
      boxShadow:'0px 0px 7px black',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, textAlign:'center' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          ZeptoBook - Static Site Blog
        </Link>
      </h1>
    </div>
  </div>
)
export default Header
