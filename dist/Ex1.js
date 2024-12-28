"use strict";
//AUTHOR
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    toString() {
        return `Author[name=${this.name},email=${this.email}]`;
    }
}
//Book
class Book {
    constructor(name, authors, price, qty) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty !== null && qty !== void 0 ? qty : 0; //ถ้าเป็นค่าที่ผู้ใช้ไม่ได้ส่งมาจะsetเป็น0
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        return `Book[name=${this.name},authors={${this.authors}},price=${this.price},qty=${this.qty}]`;
    }
    getAuthorNames() {
        const authorName = this.authors.map(name => name.getName()); //loopโดยใช้mapดึงค่าชื่อผู้เขียน
        return authorName.join(", "); //returnชื่อผู้เขียนเเล้วใช้functionjoinโดยการเพิ่ม , เข้าไปคั้นกลางระหว่างชื่อผู้เขียน
    }
}
module.exports = { Author, Book };
