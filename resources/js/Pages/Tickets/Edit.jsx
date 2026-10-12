import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Show({ auth, ticket }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="text-xl font-semibold text-gray-800">View Ticket #{ticket.id}</h2>}
        >
            <Head title={`Ticket #${ticket.id}`} />

            <div className="py-8">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 shadow sm:rounded-lg space-y-6">
                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Title</h3>
                            <p className="mt-1 text-lg font-semibold text-gray-900">{ticket.title}</p>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium text-gray-500">Description</h3>
                            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{ticket.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 border-t pt-4">
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Priority</h3>
                                <p className="mt-1 text-sm font-semibold text-gray-900">{ticket.priority}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                                <p className="mt-1 text-sm font-semibold text-gray-900">{ticket.status}</p>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-gray-500">Category</h3>
                                <p className="mt-1 text-sm font-semibold text-gray-900">{ticket.category}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 border-t pt-4">
                            <Link
                                href={route('tickets.edit', ticket.id)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm font-medium"
                            >
                                Edit Ticket
                            </Link>
                            <Link
                                href={route('tickets.index')}
                                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
                            >
                                Back to Tickets
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}