import React from 'react';
import './styles/accentButton.css';

function AccentButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="submit" className="accentButton" {...props} />;
}

export { AccentButton };
