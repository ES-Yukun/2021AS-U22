class Graph {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    state(elementid, limit, value) {
        this.elementid = elementid
        this.limit = limit
        this.value = value
        this._changeGraphData()
    }
    _percent = (limit = this.limit, value = this.value) => value / limit
    _changeGraphData(
        x = this.x,
        y = this.y,
        element = document.getElementById(this.elementid),
        percent = this._percent(),
        width = document.body.scrollWidth
    ) {
        element.style.width = String(width * percent) + "px";
        element.style.marginTop = String(x)
        element.style.marginLeft = String(y)
    }
}