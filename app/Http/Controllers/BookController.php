<?php

namespace App\Http\Controllers;

use App\Book;
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
     * @return bool
     */
    public function update(Request $request, Book $book): bool
    {
        return $book->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
        //
    }
}
