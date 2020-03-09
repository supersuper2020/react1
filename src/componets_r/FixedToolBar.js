import React, { Component } from 'react'

class FixedToolBar extends Component {constructor(props) {super(props)
    
        this.state = {
             
        }}
    //==============================
bbb_xx(){alert('Button 2')}

    //==============================
render() {return (
    <div className="fixed_toolbar">
    <p>FixedToolBar</p>
    <button onClick="bbb_xx">ClickMe Too</button>
    <button className="but_tool" onClick={this.bbb_xx.bind(this)}>Button 2</button>
    </div>
)}}

export default FixedToolBar

