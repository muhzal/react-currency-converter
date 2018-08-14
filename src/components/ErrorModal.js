import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ErrorModal extends PureComponent {
  static propTypes = {
    show: PropTypes.bool,
    onRetry: PropTypes.func,
    title: PropTypes.string,
    message: PropTypes.string,
    className: PropTypes.string,
  };

  handleToggle = () => {
    if (this.props.onRetry) {
      this.props.onRetry();
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.show}
        toggle={this.handleToggle}
        className={this.props.className}
        backdrop={'static'}
        centered
      >
        <ModalHeader>{this.props.title}</ModalHeader>
        <ModalBody>{this.props.message}</ModalBody>
        <ModalFooter className="text-center">
          <Button color="primary" onClick={this.handleToggle}>
            Retry
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ErrorModal;
