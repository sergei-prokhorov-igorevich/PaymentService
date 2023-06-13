import React from 'react';
import './field.css';

type TFieldProps = {
  label: string,
  children: React.ReactNode
};

function Field({ label, children }:TFieldProps) {
  return (
    <div className="field">
      <div className="fieldLabel">{label}</div>
      <div>{children}</div>
    </div>
  );
}

export { Field };
