import React from 'react';
import './index.scss';

const Button: React.FC<{
  readonly buttonText?: string;
  readonly hollow?: boolean;
  readonly handleClick?: () => void;
}> = ({
  buttonText,
  hollow = false,
	handleClick,
}) =>
  <button className={`btn ${hollow ? 'hollow' : ''}`} onClick={handleClick} >{buttonText}</button>

export default Button;