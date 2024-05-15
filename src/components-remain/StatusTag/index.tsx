import React from 'react';

interface StatusTagProps {
  status: 'InProgress' | 'Delayed' | 'Completed';
}

const StatusTag: React.FC<StatusTagProps> = ({ status }) => {
  let color = '';
  switch (status) {
    case 'InProgress':
      color = 'blue';
      break;
    case 'Delayed':
      color = 'red';
      break;
    case 'Completed':
      color = 'green';
      break;
    default:
      color = 'gray';
  }

  return (
    <div
      style={{
        padding: '8px',
        borderRadius: '4px',
        color: 'white',
        backgroundColor: color,
        display: 'inline-block',
        marginRight: '8px',
      }}
    >
      {status}
    </div>
  );
};

export default StatusTag;
