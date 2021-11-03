import $ from 'jquery'
import Book from './Book';

export default function appendBook(book: Book){
    $("#js-book-list").append($(
        "<li>" + 
            "<div>" +
                "<img src='" + book.image + "' alt='" + book.title + "'>" +
                "<div>" +
                    "<div>" +
                        "<h3>" + book.title +
                            "<span>(" + book.author + ")</span>" +
                        "</h3>" +
                        "<p>" + book.overview + "</p>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</li>"
    ));
}