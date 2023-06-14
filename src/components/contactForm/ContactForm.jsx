import { Form } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

const ContactForm = ({ onSubmit, children }) => (
  <Form onSubmit={onSubmit}>{children}</Form>
);

export default ContactForm;

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

