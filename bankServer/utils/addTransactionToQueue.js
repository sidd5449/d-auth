import mongoose from "mongoose";
import trasactionData from "../models/transaction.js";
class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}

const transactionQueue = new Queue();
export const addTransactionsToQueue = async(req, res) => {
    try {
        // const filter = { status: false };.
        trasactionData.find({status:false}, {id:1}).then((data) => {
            data.forEach((item) => {
                transactionQueue.enqueue(item);
            })
            console.log(data)
            // console.log(transactionQueue);
            console.log(transactionQueue.printQueue);
        })
    } catch (err) {
        console.log(err.message);
    }
}

