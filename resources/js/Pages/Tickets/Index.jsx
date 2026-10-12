import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PriorityBadge, StatusBadge } from '@/Components/Badge';
import { Head, Link, router } from '@inertiajs/react';

export default function Index({ tickets }) {
    const handleDelete = (id) => {
        if (confirm('Delete this ticket?')) {
            router.delete(route('tickets.destroy', id));
        }
    };

    const cleanLabel = (label) => label.replace('&laquo;', '«').replace('&raquo;', '»');

    return (
        <AuthenticatedLayout header={<h2 className="text-xl font-semibold text-gray-800">My Tickets</h2>}>
            <Head title="Tickets" />
            <div className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {tickets.data.length === 0 ? (
                        <div className="bg-white p-10 text-center shadow sm:rounded-lg">
                            <p className="mb-4 text-gray-600">No tickets yet. Create your first one!</p>
                            <Link href={route('tickets.create')} className="rounded bg-indigo-600 px-4 py-2 text-white">New Ticket</Link>
                        </div>
                    ) : (
                        <>
                            <div className="hidden overflow-hidden bg-white shadow sm:rounded-lg md:block">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Title</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Category</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Priority</th>
                                            <th className="px-4 py-3 text-left text-xs font-medium uppercase text-gray-500">Status</th>
                                            <th className="px-4 py-3 text-right text-xs font-medium uppercase text-gray-500">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {tickets.data.map((t) => (
                                            <tr key={t.id}>
                                                <td className="px-4 py-3 text-sm text-gray-900">{t.title}</td>
                                                <td className="px-4 py-3 text-sm text-gray-600">{t.category}</td>
                                                <td className="px-4 py-3"><PriorityBadge value={t.priority} /></td>
                                                <td className="px-4 py-3"><StatusBadge value={t.status} /></td>
                                                <td className="space-x-3 px-4 py-3 text-right text-sm">
                                                    <Link href={route('tickets.show', t.id)} className="text-indigo-600">View</Link>
                                                    <Link href={route('tickets.edit', t.id)} className="text-yellow-600">Edit</Link>
                                                    <button onClick={() => handleDelete(t.id)} className="text-red-600">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="space-y-4 md:hidden">
                                {tickets.data.map((t) => (
                                    <div key={t.id} className="space-y-2 bg-white p-4 shadow sm:rounded-lg">
                                        <h3 className="font-semibold text-gray-900">{t.title}</h3>
                                        <p className="text-sm text-gray-600">{t.category}</p>
                                        <div className="flex gap-2">
                                            <PriorityBadge value={t.priority} />
                                            <StatusBadge value={t.status} />
                                        </div>
                                        <div className="flex gap-4 pt-2 text-sm">
                                            <Link href={route('tickets.show', t.id)} className="text-indigo-600">View</Link>
                                            <Link href={route('tickets.edit', t.id)} className="text-yellow-600">Edit</Link>
                                            <button onClick={() => handleDelete(t.id)} className="text-red-600">Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 flex flex-wrap gap-1">
                                {tickets.links.map((link, i) =>
                                    link.url ? (
                                        <Link key={i} href={link.url} className={`rounded border px-3 py-1 text-sm ${link.active ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}>
                                            {cleanLabel(link.label)}
                                        </Link>
                                    ) : (
                                        <span key={i} className="rounded border px-3 py-1 text-sm text-gray-400">{cleanLabel(link.label)}</span>
                                    )
                                )}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}