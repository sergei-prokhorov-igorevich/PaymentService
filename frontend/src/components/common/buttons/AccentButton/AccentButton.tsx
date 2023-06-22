import React from 'react';
import './accentButton.css';

function AccentButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className, ...restProps } = props;
  return <button type="submit" className={`accentButton ${className}`} {...restProps} />;
}

export { AccentButton };
