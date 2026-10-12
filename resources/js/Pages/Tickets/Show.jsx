import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PriorityBadge, StatusBadge } from '@/Components/Badge';
import { Head, Link, router } from '@inertiajs/react';

export default function Show({ ticket }) {
    const handleDelete = () => {
        if (confirm('Delete this ticket?')) {
            router.delete(route('tickets.destroy', ticket.id));
        }
    };

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">Ticket #{ticket.id}</h2>}>
            <Head title={ticket.title} />
            <div className="py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="space-y-4 bg-white p-6 shadow sm:rounded-lg">
                        <h3 className="text-2xl font-bold text-gray-900">{ticket.title}</h3>
                        <div className="flex flex-wrap gap-2">
                            <PriorityBadge value={ticket.priority} />
                            <StatusBadge value={ticket.status} />
                            <span className="rounded-full bg-purple-100 px-2 py-1 text-xs font-semibold text-purple-800">{ticket.category}</span>
                        </div>
                        <p className="whitespace-pre-wrap text-gray-700">{ticket.description}</p>
                        <p className="text-sm text-gray-500">Created: {new Date(ticket.created_at).toLocaleString()}</p>
                        <div className="flex gap-3 pt-4">
                            <Link href={route('tickets.edit', ticket.id)} className="rounded bg-indigo-600 px-4 py-2 text-sm text-white">Edit</Link>
                            <button onClick={handleDelete} className="rounded bg-red-600 px-4 py-2 text-sm text-white">Delete</button>
                            <Link href={route('tickets.index')} className="px-4 py-2 text-sm text-gray-600 underline">Back</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}