import React, {Component} from 'react';

export default class A extends Component{

    ref666=React.createRef();

    state={
        msg:1
    }

    handleClick=()=>{
        this.setState({
            msg:this.state.msg+1
        })
        console.log(1,this.state.msg)

        this.setState({
            msg:this.state.msg+1
        })
        console.log(2,this.state.msg)

        this.setState({
            msg:this.state.msg+1
        })
        console.log(3,this.state.msg)

        this.setState({
            msg:this.state.msg+1
        })
        console.log(4,this.state.msg)
    }

    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                <button onClick={this.handleClick}>+1</button>
                <button ref={this.ref666}>+2</button>
            </div>
        )
    }

    componentDidMount(){
        this.ref666.current.onclick=()=>{
            this.setState({
                msg:this.state.msg+1
            })
            console.log(1,this.state.msg)
    
            this.setState({
                msg:this.state.msg+1
            })
            console.log(2,this.state.msg)
    
            this.setState({
                msg:this.state.msg+1
            })
            console.log(3,this.state.msg)
    
            this.setState({
                msg:this.state.msg+1
            })
            console.log(4,this.state.msg)
        }
    }
}