import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    
        constructor(props) {
            super(props)

            this.state = {
                error: null,
            }
        }
        componentDidCatch(error,errorInfo) {
            console.log({error,errorInfo});
        }

        static getDerivedStateFromError(error) {
            return {error};
        }

    render() {
        if(this.state.error)
    return  <div style={{color: "red"}}>SomeThing Went Wrong</div>;

    return this.props.children;
  }
}

export default ErrorBoundry