import $ from 'jquery';
import appendBook from './appendBook';
import Book from './Book';

$(function() {
    let books = [
        {
            title: "フロントエンド開発入門　プロフェッショナルな開発ツールと設計・実装",
            image: "https://images-na.ssl-images-amazon.com/images/I/81A9ki9YShL.jpg",
            author: "安達 稜・武田 諭",
            overview: "現代のフロントエンド開発の基礎を知ることができます。"
        },
        {
            title: "リーダブルコード より良いコードを書くためのシンプルで実践的なテクニック",
            image: "https://images-na.ssl-images-amazon.com/images/I/51MgH8Jmr3L.jpg",
            author: "Dustin Boswell・Trevor Founcher 訳 角 征典",
            overview: "読みやすく、理解しやすいコードを書くためのテクニックが詰まっています。"
        },
    ];

    books.forEach(book => appendBook(book));
    $("#js-add-book").on("click", function(){

        let newBook: Book = {
            title: "",
            image:  "",
            author: "",
            overview: ""
        };

        newBook.title = <string>$("add-book-form").find("#id").val();
        books.push(newBook);
        books.forEach(newBook => appendBook(newBook));
    });
});