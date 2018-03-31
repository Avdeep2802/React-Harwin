import React, {Component} from 'react';
import Modal from 'react-modal';

class SignupModal extends Component{

  constructor(){
    super();
    this.state = {
      isActive: false
    }
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  toggleModal = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render(){
    return(
      <div>
      <button onClick= {this.toggleModal}> Show Modal </button>
      <Modal class="modal fade" isOpen={this.state.isActive} onRequestClose= {this.toggleModal}>
          {this.props.children}
      </Modal>
      </div>

    );
  }

}

export default SignupModal;
