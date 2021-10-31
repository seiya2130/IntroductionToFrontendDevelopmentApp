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
    ]

    function appendBook(book){
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
        ))  
    }

    books.forEach(book => appendBook(book));

    $("#js-add-book").on("click", function(){
        let book = {
            title: "",
            image: "",
            author: "",
            overview: ""
        }
        book.title = $("add-book-form").find("#id").val();
        books.push(book);
        books.forEach(book => appendBook(book));
    })
});