<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    public function index(): Response
    {
        $todos = [];

        for ($i = 0; $i < 10; $i++) {
            $todos[] = [
                'id' => $i + 1,
                'title' => fake()->sentence(),
                'content' => fake()->paragraph(),
            ];
        }

        return Inertia::render('home', compact('todos'));
    }

    public function create(): Response
    {
        return Inertia::render('create');
    }

    public function store(Request $request): RedirectResponse
    {
        sleep(1);

        return to_route('index');
    }
}
