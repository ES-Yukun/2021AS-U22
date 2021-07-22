class Graph {
    constructor(elementid, limit, value, x, y, _timeout = 100) {
        this.elementid = elementid;
        this.limit = limit;
        this.value = value;
        this.x = x;
        this.y = y;
        this.timeout = _timeout;
    }
    _percent = (limit = this.limit, value = this.value) => value / limit;
    _changeGraphData(x = this.x, y = this.y, element = document.getElementById(elementid), percent = _percent()) {

    }

    start() {
        while (true) {
            setTimeout();
        }
    }
}