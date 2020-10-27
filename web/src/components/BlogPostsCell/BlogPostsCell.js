// web/src/components/BlogPostsCell/BlogPostsCell.js

import { Link, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query BlogPostQuery($id: Int!) {
    post(id: $id) {
      id

      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

// export const Success = ({ post }) => {
//  return JSON.stringify(post)
// }

export const Success = ({ posts }) => {
  return posts.map((post) => (
    <article key={post.id}>
      <header>
        <h2>
          <Link to={routes.blogPost()}>{post.title}</Link>
        </h2>
      </header>
      <p>{post.body}</p>
      <div>Posted at: {post.createdAt}</div>
      <Link to={routes.blogPost({ id: post.id })}>{post.title}</Link>
    </article>
  ))
}
