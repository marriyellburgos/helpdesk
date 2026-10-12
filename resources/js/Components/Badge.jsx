const priorityColors = {
    Low: 'bg-gray-100 text-gray-800',
    Medium: 'bg-blue-100 text-blue-800',
    High: 'bg-orange-100 text-orange-800',
    Urgent: 'bg-red-100 text-red-800',
};

const statusColors = {
    Open: 'bg-yellow-100 text-yellow-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    Resolved: 'bg-green-100 text-green-800',
    Closed: 'bg-gray-200 text-gray-700',
};

export function PriorityBadge({ value }) {
    return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${priorityColors[value] || ''}`}>{value}</span>;
}

export function StatusBadge({ value }) {
    return <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusColors[value] || ''}`}>{value}</span>;
}