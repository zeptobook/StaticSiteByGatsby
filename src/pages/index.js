import React from 'react'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import { graphql } from "gatsby"
import './index.css'
import Link from 'gatsby-link'

export default ({ data }) => {
  return (
    <div>
      <Helmet
      title="ZeptoBook - Static Site Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
  </div>

    <h4 style={{margin: '2em'}}>Total Posts: {data.allMarkdownRemark.totalCount}</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        
        <div key={node.id} className="article-box">
        <Link to={node.fields.slug} style={{textDecoration: 'none', color: 'inherit'}}><h3 className="title">{node.frontmatter.title}</h3></Link>
        <p className="author">{node.frontmatter.author}</p>
        <p className="date">{node.frontmatter.date}</p>
        <p className="excerpt">{node.excerpt}</p>
      </div>
      ))}
    </div>
  )
}
export const  query = graphql`
query HomePageQuery{
	allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
	  totalCount
    edges {
	    node {
        fields{
          slug
        }
	      frontmatter {
	        title
	        date
	        author
        }
    		excerpt
        timeToRead
	    }
	  }
	}
}
`

