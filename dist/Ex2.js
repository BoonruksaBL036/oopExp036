"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = exports.Customer = void 0;
//Customer
class Customer {
    constructor(id, name, discount) {
        this.id = id;
        this.name = name;
        this.discount = discount;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `${this.name}(${this.id}) (${this.discount}%)`;
    }
}
exports.Customer = Customer;
//Invoice
class Invoice {
    constructor(id, customer, amount) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.id;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    Amount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerdiscount() {
        return this.customer.getDiscount();
    }
    getAmountAfterDiscount() {
        const discount = this.amount * (this.getCustomerdiscount() / 100);
        const cal = this.amount - discount;
        return cal;
    }
    toString() {
        return `Invoice[id=${this.id},customer=${this.customer.toString()},amount=${this.amount}]`;
    }
}
exports.Invoice = Invoice;
