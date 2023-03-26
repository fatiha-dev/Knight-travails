const directions = [[-2,-1], [-2,1],[-1,2],[1,2],[2,1],[2,-1],[1,-2],[-1,-2]];
class Node {
    constructor(row, col, distanceFromStart) {
        this.row = row;
        this.col = col;
        this.distanceFromStart = distanceFromStart;
    }
    getPositionString(){
        return `${this.row}, ${this.col}`
    }
}
const getNeighbors = (row, col) => {
    const neigbors = [];
    for(const direction of directions) {
        const [rowChange, colChange] = direction;
        const neighborRow = row + rowChange;
        const neighborCol = col + colChange;
        neigbors.push(neighborRow, neighborCol);
    }
    return neigbors;
}

function getKnightSortestPath(x, y) {
    const queue = [];
    const startNode = new Node(0,0,0);
    queue.push(startNode);
    
    const visisted = new Set();
    while(queue.length) {
        // remove node
    // in practice we should use a real queue class so that we can dequeue in O(1)
    // instead of O(n) time
    const node = queue.shift();
    const { row, col, distanceFromStart} = node;
    // process node
    if(row === targetRow && col === targetCol) return distanceFromStart;
    visisted.add(node.getPositionString())
    // add neighbors
    for (const neigbor of getNeighbors(row, col)) {
        const [neighborRow, neighborCol] = neigbor;
        const neighborNode = new Node(neighborRow, neighborCol, distanceFromStart +1)

        if(visisted.has()) continue;
        queue.push(neighborNode);
    }
    }
}