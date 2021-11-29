import React from 'react'

class  UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status};

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
        // this.forceUpdate(); - костыль
    };
    deactivateEditMode = () => {
        this.setState(
            {editMode: false,
                    status: this.state.status});

        this.props.updateStatus(this.state.status);
        this.forceUpdate();
    };

    onStatusChange = (e) =>{this.setState({status: e.currentTarget.value});};

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status)
            this.setState(
                {status: this.props.status});}

    render() {
        return <div>
            {!this.state.editMode
            ?<div>
                <span onDoubleClick={this.activateEditMode}>
                    {this.state.status || "__________"}</span>
            </div>
            :<div>
                <input  onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>
            }
        </div>
    }


};

export default UserStatus