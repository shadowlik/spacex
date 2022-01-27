import { Input } from '@chakra-ui/react'
import { ChangeEventHandler, useEffect, useState } from 'react';

export interface FilterBarProps {
    onFilterChange: (search: string) => void;
    debounceTime?: number;
}

export function FilterBar({ onFilterChange, debounceTime = 1000 }: FilterBarProps) {
    const [search, setSearch] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
       
        onFilterChange(search);
        }, debounceTime);

        return () => clearTimeout(timer);
    }, [search, onFilterChange, debounceTime]);

    return (
        <div>
            <Input style={{background: '#FFF'}} onChange={(e) => setSearch(e.target.value)} placeholder="Filter Missions" />
        </div>
    );
}