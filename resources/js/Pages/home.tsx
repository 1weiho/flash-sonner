import { columns } from '@/components/data-table/todos/column';
import { DataTable } from '@/components/data-table/todos/data-table';
import { Button } from '@/components/ui/button';
import { Layout } from '@/layouts/layouts';
import { Todo } from '@/types';
import { Link } from '@inertiajs/react';
import { Plus } from 'lucide-react';

interface HomePageProps {
    todos: Todo[];
}

const HomePage = ({ todos }: HomePageProps) => {
    return (
        <Layout>
            <div className="container mx-auto">
                <div className="mt-20 flex justify-between">
                    <h1 className="text-xl">Users List</h1>
                    <Button asChild>
                        <Link href={route('create')}>
                            <Plus />
                            Create
                        </Link>
                    </Button>
                </div>

                <div className="mt-4">
                    <DataTable columns={columns} data={todos} />
                </div>
            </div>
        </Layout>
    );
};

export default HomePage;
