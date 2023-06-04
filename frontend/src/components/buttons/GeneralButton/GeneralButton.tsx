import React from 'react';
import './generalButton.css';

function GeneralButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return <button type="submit" className="generalButton" {...props} />;
}

export { GeneralButton };
