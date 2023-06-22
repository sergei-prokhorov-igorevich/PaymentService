import React from 'react';
import './generalButton.css';

function GeneralButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return <button type="submit" className={`generalButton ${className}`} {...restProps} />;
}

export { GeneralButton };
