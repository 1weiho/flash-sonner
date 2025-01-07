import { Toaster } from '@/components/ui/sonner';
import { useFlashToast } from '@/hooks/use-flash-toast';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
    useFlashToast();

    return (
        <main>
            {children}
            <Toaster />
        </main>
    );
};

export { Layout };
