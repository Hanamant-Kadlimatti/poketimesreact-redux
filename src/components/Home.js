import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pokeball from '../Pokeball.png';

import {connect} from 'react-redux';

class Home extends Component{

    // state ={
    //     posts : []
    // }
    // componentDidMount () {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //     .then( (res) => {
    //         console.log(res)

    //         this.setState({
    //             posts : res.data.slice(0, 10)
    //         })
    //     })
    // }

    // Redux

    render() {

        console.log(this.props)
        // const {posts} = this.state

        const {posts} = this.props

        const postsList = posts.length ? (
            posts.map( post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alt="A React Logo" />
                      <div className="card-content">
                         <Link to={'/' + post.id}>
                         <span className="card-title red-text"> {post.title} </span>
                         </Link>
                          <p> {post.body} </p>
                      </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> <p> No Posts Yet </p></div>
        )
        return(
            <div className="container">
              <h1 className="center"> Home</h1>
               {postsList} 
            </div>
        )
    }
}

// export default Home

const mapStateToProps = (state) => {
    return {
       posts : state.posts
    }
}
     export default connect(mapStateToProps)(Home)