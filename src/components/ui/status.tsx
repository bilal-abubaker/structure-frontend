// components/StatusLabel.tsx
import React from 'react';
import clsx from 'clsx';

interface StatusLabelProps {
  status: 'new' | 'used' | 'expired' | 'active' | 'inactive';
}

const StatusLabel: React.FC<StatusLabelProps> = ({ status }) => {
  const statusStyles = {
    new: 'bg-blue-100 text-blue-600',
    used: 'bg-green-100 text-green-600',
    expired: 'bg-red-100 text-red-600',
    active: 'bg-green-100 text-green-600',
    inactive: 'bg-red-100 text-red-600',
  };

  return (
    <span
      className={clsx(
        'rounded-lg px-2 py-1 text-sm font-semibold',
        statusStyles[status],
      )}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusLabel;
