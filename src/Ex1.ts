//AUTHOR
class Author {
    private name: string
    private email: string

    constructor(name: string, email: string) {
        this.name = name
        this.email = email
    }
    public getName(): string {
        return this.name
    }
    public getEmail(): string {
        return this.email
    }
    public setEmail(email: string): void {
        this.email = email
    }
    public toString(): string {
        return `Author[name=${this.name},email=${this.email}]`
    }
}
//Book
class Book {
    private name: string
    private authors: Author[]
    private price: number
    private qty: number

    constructor(name: string, authors: Author[], price: number, qty: number) {
        this.name = name
        this.authors = authors
        this.price = price
        this.qty = qty ?? 0 //ถ้าเป็นค่าที่ผู้ใช้ไม่ได้ส่งมาจะsetเป็น0
    }
    public getName(): string {
        return this.name
    }
    public getAuthors(): Author[] {
        return this.authors
    }
    public getPrice(): number {
        return this.price
    }
    public setPrice(price: number): void {
        this.price = price
    }
    public getQty(): number {
        return this.qty
    }
    public setQty(qty: number): void {
        this.qty = qty
    }
    public toString(): string {
        return `Book[name=${this.name},authors={${this.authors}},price=${this.price},qty=${this.qty}]`
    }
    public getAuthorNames(): string {
        const authorName = this.authors.map(name => name.getName()) //loopโดยใช้mapดึงค่าชื่อผู้เขียน
        return authorName.join(", ") //returnชื่อผู้เขียนเเล้วใช้functionjoinโดยการเพิ่ม , เข้าไปคั้นกลางระหว่างชื่อผู้เขียน
    }
}
export = { Author, Book };