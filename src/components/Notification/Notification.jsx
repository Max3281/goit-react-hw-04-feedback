import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <div>{message}</div>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
