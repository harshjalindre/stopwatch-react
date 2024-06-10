import PropTypes from 'prop-types';

const BoxButton = ({btnName , background , events}) => {
  return (
    <button className={`bg-${background}`} onClick={events}>{btnName}</button>
  )
}

BoxButton.propTypes = {
    btnName     : PropTypes.string,
    background  : PropTypes.string,
    events      : PropTypes.func,
}

export default BoxButton