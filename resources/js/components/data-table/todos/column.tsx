import { Todo } from '@/types';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Todo>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
    },
    {
        accessorKey: 'title',
        header: 'Title',
    },
    {
        accessorKey: 'content',
        header: 'Content',
    },
];
