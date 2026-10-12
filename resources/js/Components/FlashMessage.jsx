import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function FlashMessage() {
    const { flash } = usePage().props;
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash?.success || flash?.error) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [flash]);

    if (!visible) return null;

    const isError = !!flash?.error;

    return (
        <div className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded px-4 py-3 text-sm sm:px-6 lg:px-8 ${isError ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            <span>{isError ? flash.error : flash.success}</span>
            <button onClick={() => setVisible(false)} className="ml-4 font-bold">×</button>
        </div>
    );
}