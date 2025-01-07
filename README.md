## About this project

This project showcases how to use Laravel Inertia with React along with Sonner and an automatic hook. It enables automatic rendering of flash messages, allowing you to easily return `->with()` messages in the controller.

## Inertia Share

First, update `HandleInertiaRequests.php` with the following code to share flash messages with the frontend via Inertia:

```php
'flash' => [
    'success' => fn () => $request->session()->get('success'),
    'error' => fn () => $request->session()->get('error'),
],
```

## Hook

Next, define a hook to listen for flash messages returned by Inertia Share. When the message is updated, it will automatically render a toast using Sonner:

```ts
const useFlashToast = () => {
    const { flash } = usePage<PageProps>().props;

    useEffect(() => {
        if (flash?.success) {
            toast.success(flash.success);
        }
        if (flash?.error) {
            toast.error(flash.error);
        }
    }, [flash]);
};
```

## Usage

Finally, if you want to send a redirect response from the controller and render a toast on the redirected page, you can easily do so with this method:

```php
return to_route('index')->with('success', 'Create todo successfully.');
```
