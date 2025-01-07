<?php

namespace App\Http\Controllers;

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
                'title' => fake()->title(),
                'content' => fake()->paragraph(),
            ];
        }

        return Inertia::render('home', compact('todos'));
    }
}
