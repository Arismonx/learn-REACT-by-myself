'use client'
import { useState } from 'react';

export default function Panel({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [open, setOpen] = useState(true);
    return (
        <section className="panel">
            <button onClick={() => setOpen(!open)}>
                {open ? 'Collapse' : 'Expand'}
            </button>
            {open && children}
        </section>
    );
}