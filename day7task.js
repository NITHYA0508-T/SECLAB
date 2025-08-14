// 1) Define Book class
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        // 3) Use Date object for published year
        this.publishedYear = new Date(publishedYear, 0); // Month is 0 because Jan
    }

    getSummary() {
        return `${this.title} by ${this.author}, Published in ${this.publishedYear.getFullYear()}`;
    }
}

// 2) Define EBook subclass extending Book
class EBook extends Book {
    constructor(title, author, publishedYear, fileSize) {
        super(title, author, publishedYear);
        this.fileSize = fileSize; // in MB
    }

    // Override getSummary to include file size
    getSummary() {
        return `${this.title} by ${this.author}, Published in ${this.publishedYear.getFullYear()}, File Size: ${this.fileSize}MB`;
    }
}

// 4) Create multiple instances
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, 2.5);
const ebook2 = new EBook("The Martian", "Andy Weir", 2011, 1.8);

// Display summaries
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(ebook1.getSummary());
console.log(ebook2.getSummary());
