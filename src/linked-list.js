const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._tail = null;
        this._head = null;
    }

    append(data) {
        const ThisNode = new Node (data, this._tail, null);
        if (this.length == 0){
            this._head = ThisNode;
        }
        ThisNode.prev = this._tail;
        if (this.length != 0){
            this._tail.next = ThisNode;
        }
        this._tail = ThisNode;
        this.length++;
        return this;
    }

    head() {
        if (this._head != null){
            return this._head.data;
        }
        else{
            return null;
        }
    }

    tail() {
        if (this._tail != null){
            return this._tail.data;
        }
        else{
            return null;
        }
    }

    at(index) {
        var ThisNode = this._head;
        for (var i=0; i<index; i++){
            ThisNode = ThisNode.next;
        }
        return ThisNode.data;
    }

    insertAt(index, data) {
        var ThisNode = this._head;
        for (var i=0; i<index; i++){
            ThisNode = ThisNode.next;
        }
        ThisNode.data = data;
        return this;
    }

    isEmpty() {
        return !this.length;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    IndexNode(index){
        var ThisNode = this._head;
        for (var i=0; i<index; i++){
            ThisNode = ThisNode.next;
        }
        return ThisNode;
    }

    deleteAt(index) {
        this.length--;
        this._head.prev = this._tail;
        var ThisNode= new Node();
        ThisNode = this._head.prev;
        for(var i=0;i<index;++i){
            ThisNode = ThisNode.prev;
        }
        var a = new Node();
        a= ThisNode.prev;
        a.next=ThisNode.next;
        a=ThisNode.next;
        a.prev=ThisNode.prev;
    }

    reverse()
    {
        var ThisNode= new Node();
        var ThisNode2= new Node();
        ThisNode= this._tail.next;
        ThisNode.prev=this._head;
        this._tail.next=this._head.prev;
        this._head.prev=ThisNode;
        for(var i=0;i<this.length;i++) {
            ThisNode2 = ThisNode.next;
            ThisNode.next = ThisNode.prev;
            ThisNode.prev = ThisNode2;
            ThisNode = ThisNode2;
        }
    }
    indexOf(data) {
        var ThisNode = this._head;
        for (var i=0; i<this.length; i++){
            if (ThisNode.data == data){
                return i;
            }
            else{
                ThisNode = ThisNode.next;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;