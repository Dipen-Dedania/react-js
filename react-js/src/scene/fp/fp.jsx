import React from 'react';
import ReactDOM from 'react-dom';
var R = require('ramda');
var Rx = require('rx');
/// Data

const authors = [
  {
    "name": "bob",
    "email": "bob@bob.com"
  },
  {
    "name": "jeff",
  },
  {
    "name": "alice",
    "location": "Bristol, UK"
  },
  {
    "location": "London, UK"
  }
]

const comments = [
  "Functional programming is awesome!",
  "This is way better than OO",
  "I'm never going back",
  "Death to var, let and this!",
  "Everyone can write functional programs!"
]

/// Styles

const appStyle = {
  fontFamily: 'Open Sans',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const titleStyle = {
  margin: '15px',
  background: 'white',
  borderRadius: '5px',
  padding: '10px',
  width: '500px',
  fontSize: '20px',
}

const postStyle = {
  margin: '15px',
  background: 'white',
  borderRadius: '5px',
  padding: '10px',
  width: '500px',
  display: 'flex',
  flexDirection: 'row'
}

const authorStyle = {
  width: "30%"
}

const commentStyle = {
  width: "70%"
}

const nameStyle = {
  fontSize: '20px'
}

const emailStyle = {
  fontSize: '12px',
  color: 'blue'
}

const locationStyle = {
  fontSize: '14px'
}

/// Components

const name = author => <div style={nameStyle}>{author.name}</div>

const anonymous = () => <div style={nameStyle}>anon</div>

const email = author => <div style={emailStyle}>Email: {author.email}</div>

const location = author => <div style={locationStyle}>Location: {author.location}</div>

const empty = () => null

const postComponents = R.map(p => <Post author={p.author} comment={p.comment} />)

const authorComponents = author => [
      author.name ? name(author) : anonymous(),
      author.email ? email(author) : empty(),
      author.location ? location(author) : empty()
    ]

function Author(props) {
  return (
  <div style={authorStyle}>
    {authorComponents(props.author)}
  </div>
  )
}

function Comment(props) {
  return (
  <div style={commentStyle}>
    {props.comment}
  </div>
  )
}

function Post(props){
  return (
  <div style={postStyle}>
    <Author author={props.author} />
    <Comment comment={props.comment} />
  </div>
  )
}

function PostList(props) {
  return (
    <div>
      {postComponents(props.posts)}
    </div>
  )
}

function Title(props) {
  return <h2>{props.title}</h2>
}

function Subject(props) {
  return (
  <div style={postStyle}>
    <em>{props.subject}</em>
  </div>
  )
}

function App(props) {
  return (
  <div style={appStyle}>
    <Title title={props.title} />
    <Subject subject={props.subject} />
    <PostList posts={props.posts} />
  </div>)
}

const nthWrapped = array => R.pipe(R.flip(R.mathMod)(array.length), R.flip(R.nth)(array))

const nthPost = i => R.merge({ author: nthWrapped(authors)(i) }, { comment: nthWrapped(comments)(i)})

const postsInRange = R.map(nthPost)

// const app = posts => <App title="Functional Forum" subject="What do you think of functional programming?" posts={posts} />

// const postSource = Rx.Observable.timer(0, 2000)
//   .map(nthPost)


// postSource
//   .scan(R.flip(R.append), [])
//   .map(app)
//   .subscribe(R.flip(ReactDOM.render)(document.getElementById('app')))

class MainPage extends React.Component {
    render(){
        return (
          <div>
              <App title="Functional Forum" subject="What do you think of functional programming?" posts={postsInRange(R.range(0, 5))} />
          </div>
          );
    }
}

export default MainPage;