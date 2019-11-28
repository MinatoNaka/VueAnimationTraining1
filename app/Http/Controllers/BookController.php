<?php

namespace App\Http\Controllers;

use App\Book;
use Exception;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class BookController extends Controller
{
    /**
     * @return Collection
     */
    public function index(): Collection
    {
        return Book::all();
    }

    /**
     * @param Request $request
     * @return Book
     */
    public function store(Request $request): Book
    {
        return Book::create($request->all());
    }

    /**
     * @param Book $book
     * @return Book
     */
    public function show(Book $book): Book
    {
        return $book;
    }

    /**
     * @param Request $request
     * @param Book $book
     * @return Book
     */
    public function update(Request $request, Book $book): Book
    {
        $book->update($request->all());

        return $book;
    }

    /**
     * @param Book $book
     * @return Book
     * @throws Exception
     */
    public function destroy(Book $book): Book
    {
        $book->delete();

        return $book;
    }
}
