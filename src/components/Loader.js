import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = ({ show }) => {
  return (
    <Modal
      isOpen={show}
      backdrop={'static'}
      contentClassName="bg-transparent border-0"
      centered
    >
      <FontAwesomeIcon
        icon={faSpinner}
        pulse
        className="m-auto spinner"
      />
    </Modal>
  );
};

Loader.displayName = 'Loader';

Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;
