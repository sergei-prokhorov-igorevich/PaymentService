import React from 'react';
import './gap.css';

enum GapSize {
  Medium = 'medium',
  Large = 'large',
}

interface GapProps {
  size: GapSize;
}

function Gap(props: GapProps) {
  return <div className={`gap ${props.size}`} />;
}

export { Gap, GapSize };
