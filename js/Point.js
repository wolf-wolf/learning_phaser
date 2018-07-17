class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static compare(p1, p2) {
        return p1.x === p2.x && p1.y === p2.y;
    }

    compare(p) {
        return this.x === p.x && this.y === p.y;
    }

    coor2Str() {
        return `p_${this.x}_${this.y}`
    }
}