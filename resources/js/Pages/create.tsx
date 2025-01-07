import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { Loader2 } from 'lucide-react';
import { FormEvent } from 'react';

const CreatePage = () => {
    const { data, setData, post, processing } = useForm({
        title: '',
        content: '',
        simulate_error: false,
    });

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        post(route('store'));
    };

    return (
        <div className="container mx-auto">
            <h1 className="mt-20 text-xl">Create User</h1>

            <form className="mt-8 space-y-4" onSubmit={onSubmit}>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                    />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="content">Content</Label>
                    <Input
                        type="text"
                        id="content"
                        placeholder="Content"
                        value={data.content}
                        onChange={(e) => setData('content', e.target.value)}
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <Checkbox
                        id="simulate_error"
                        checked={data.simulate_error}
                        onCheckedChange={() =>
                            setData('simulate_error', !data.simulate_error)
                        }
                    />
                    <label
                        htmlFor="simulate_error"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        Simulate error
                    </label>
                </div>

                <Button type="submit" disabled={processing}>
                    {processing && <Loader2 className="animate-spin" />}
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default CreatePage;
