import { Input } from '@chakra-ui/react'
import { ChangeEventHandler, useEffect, useState } from 'react';

export interface FilterBarProps {
    onFilterChange: (search: string) => void;
    debounceTime?: number;
    placeholder?: string;
}

export function FilterBar({ onFilterChange, debounceTime = 1000, placeholder = 'Filter' }: FilterBarProps) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
       
        onFilterChange(search);
        }, debounceTime);

        return () => clearTimeout(timer);
    }, [search, onFilterChange, debounceTime]);

    return (
        <div>
            <Input style={{background: '#FFF'}} onChange={(e) => setSearch(e.target.value)} placeholder={placeholder} />
        </div>
    );
}