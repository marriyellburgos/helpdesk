import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';

const priorities = ['Low', 'Medium', 'High', 'Urgent'];
const statuses = ['Open', 'In Progress', 'Resolved', 'Closed'];
const categories = ['Hardware', 'Software', 'Network', 'Account', 'Other'];

const selectClass = 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500';

export default function TicketForm({ data, setData, errors, processing, onSubmit, submitLabel }) {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div>
                <InputLabel htmlFor="title" value="Title" />
                <TextInput id="title" className="mt-1 block w-full" value={data.title} onChange={(e) => setData('title', e.target.value)} />
                <InputError message={errors.title} className="mt-2" />
            </div>

            <div>
                <InputLabel htmlFor="description" value="Description" />
                <textarea id="description" rows="5" className={selectClass} value={data.description} onChange={(e) => setData('description', e.target.value)} />
                <InputError message={errors.description} className="mt-2" />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                <div>
                    <InputLabel htmlFor="priority" value="Priority" />
                    <select id="priority" className={selectClass} value={data.priority} onChange={(e) => setData('priority', e.target.value)}>
                        {priorities.map((p) => (<option key={p} value={p}>{p}</option>))}
                    </select>
                    <InputError message={errors.priority} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="status" value="Status" />
                    <select id="status" className={selectClass} value={data.status} onChange={(e) => setData('status', e.target.value)}>
                        {statuses.map((s) => (<option key={s} value={s}>{s}</option>))}
                    </select>
                    <InputError message={errors.status} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="category" value="Category" />
                    <select id="category" className={selectClass} value={data.category} onChange={(e) => setData('category', e.target.value)}>
                        {categories.map((c) => (<option key={c} value={c}>{c}</option>))}
                    </select>
                    <InputError message={errors.category} className="mt-2" />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>{processing ? 'Saving...' : submitLabel}</PrimaryButton>
                <Link href={route('tickets.index')} className="text-sm text-gray-600 underline">Cancel</Link>
            </div>
        </form>
    );
}