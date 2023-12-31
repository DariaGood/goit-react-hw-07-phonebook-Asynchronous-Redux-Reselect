import { Title, TitleSecond } from 'components/Style/Element.styled';
import PropTypes from 'prop-types';

const H1 = ({ title }) => <Title>{title}</Title>;
const H2 = ({ title }) => <TitleSecond>{title}</TitleSecond>;

H1.propTypes = {
    title: PropTypes.string,
};

H2.propTypes = {
    title: PropTypes.string,
};

export {H1, H2};