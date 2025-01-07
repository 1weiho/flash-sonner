import { columns } from '@/components/data-table/todos/column';
import { DataTable } from '@/components/data-table/todos/data-table';
import { Button } from '@/components/ui/button';
import { Todo } from '@/types';
import { Plus } from 'lucide-react';

interface HomePageProps {
    todos: Todo[];
}

const HomePage = ({ todos }: HomePageProps) => {
    return (
        <div className="container mx-auto">
            <div className="mt-20 flex justify-between">
                <h1 className="text-xl">Users List</h1>
                <Button>
                    <Plus />
                    Create
                </Button>
            </div>

            <div className="mt-4">
                <DataTable columns={columns} data={todos} />
            </div>
        </div>
    );
};

export default HomePage;
