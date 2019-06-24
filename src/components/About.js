import React, {Component} from 'react';
import Rainbow from '../hoc/Rainbow'

class About extends Component{
    render () {
        return (
            <div className="container">
               <h1 className="center"> About</h1>
               <p> klcjqk ifjewroif oijefiowe iuwqe fjdhfjiodsfoi vfsdijov</p>
            </div>
        )
    }
}

export default Rainbow(About)