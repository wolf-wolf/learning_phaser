let count = 0;

class Plane {
    constructor() {
        this.id = count++;
        this.head = [];
        this.bwCrossPoint = [];
        this.btCrossPoint = [];
        this.wing = [];
        this.body = [];
        this.tail = [];
        this.state = 1;
        this.wingDirection = 0;
        this.bodyDirection = 0;
        this.tailDirection = 0;
    }

}