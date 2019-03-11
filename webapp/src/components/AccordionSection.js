import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AccordionSection extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  onClick = () => {
    this.props.onClick(this.props.label);
  };

  render() {
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div
        style={{
          background: isOpen ? 'transparent' : 'transparent',
          padding: '5px 10px',


        }}
      >
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
        <div class = 'AccordionTitle'>
          {label}
        </div>
          <div style={{ float: 'right' }}>

          </div>
        </div>
        {isOpen && (
          <div
            style={{
              background: 'transparent',
              marginTop: 10,
              padding: '10px 20px',
              width: '100%'
              }}
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;
