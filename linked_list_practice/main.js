class LinkedList{
    constructor(value=null){
        const first = new Node(value);
        this.head = first
        this.__size = 1
        this.tail = first

    }
    append(value){
        // append a node at the tail
        const newNode = new Node(value)
        newNode.prevNode = this.tail
        this.tail.nextNode = newNode;
        this.tail = newNode;
        this._incrementSize();
    }
    prepend(value){
        // append a node at the head
        const newNode = new Node(value,this.head);
        this.head.prevNode = newNode
        this.head = newNode;
        this._incrementSize();
    }
    get size(){
        return this.__size;
        // give size of the list
    }
    _incrementSize(){
        this.__size++
    }
    _decrementSize(){
        this.__size--
    }

    at(index){
        //give node at given index, index from 0 
        let hasElements = true;
        let curIndex = 0;
        let curNode = this.head;
        while(hasElements){
            if(curIndex === index){
                return curNode;
            }
            if(curNode.nextNode === null){
                console.log('Index Out of Bounds')
                hasElements = false;
                break
            }
            curNode = curNode.nextNode;
            curIndex++

        }
    }
    pop(){
        //pop a node off the end of the list
        const newTail = this.tail.prevNode;
        this.tail.prevNode = null;
        this.tail = newTail 
        this._decrementSize();
    }
    contains(value){
        // check if the list contains the value
        let hasElements = true;
        let curNode = this.head;
        while(hasElements){
            if(curNode.value === value){
                return true;
            }
            if(curNode.nextNode === null){
                console.log('Index Out of Bounds')
                hasElements = false;
                return false 
            }
            curNode = curNode.nextNode;
        }
    }
    find(value){
        // return index if in list, else return null 
        let curNode = this.head;
        let hasElements = true;
        let curIndex = 0;
        while(hasElements){
            if(curNode.value === value){
                return curIndex;
            }
            if(curNode.nextNode === null){
                hasElements = false;
                console.log('value not found');
                return null
            }
            curNode = curNode.nextNode;
            curIndex++
        }
    }
    insertAt(value,index){
        const nodeAtinx = this.at(index);
        const newNode = new Node(value,nodeAtinx,nodeAtinx.prevNode);
        nodeAtinx.prevNode.nextNode = newNode;
        nodeAtinx.prevNode = newNode;
        // need to handle head and tail edge cases
        
    }

}
class Node{
    constructor(value=null,nextNode=null,prevNode=null){
        this.value = value;
        this.nextNode = nextNode;
        this.prevNode = prevNode;
    }
}

function visualizeLinkedList(linkedList) {
    const container = document.createElement('div');
    container.className = 'linked-list-container';
    container.style.display = 'flex';
    container.style.alignItems = 'center';
    container.style.overflowX = 'auto';
    container.style.padding = '20px';

    let currentNode = linkedList.head;
    let index = 0;

    while (currentNode) {
        const tileContainer = document.createElement('div');
        tileContainer.style.display = 'flex';
        tileContainer.style.flexDirection = 'column';
        tileContainer.style.alignItems = 'center';

        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.border = '1px solid black';
        tile.style.padding = '10px';
        tile.style.margin = '0 10px';
        tile.style.width = '100px';
        tile.style.height = '100px';
        tile.style.display = 'flex';
        tile.style.flexDirection = 'column';
        tile.style.justifyContent = 'space-between';

        const indexElem = document.createElement('div');
        indexElem.textContent = `Index: ${index}`;
        tile.appendChild(indexElem);

        const valueElem = document.createElement('div');
        valueElem.textContent = `Value: ${currentNode.value}`;
        tile.appendChild(valueElem);

        tileContainer.appendChild(tile);

        const nextNodeElem = document.createElement('div');
        nextNodeElem.textContent = `Next: ${currentNode.nextNode ? currentNode.nextNode.value : 'null'}`;
        nextNodeElem.style.fontSize = '12px';
        nextNodeElem.style.marginTop = '5px';
        tileContainer.appendChild(nextNodeElem);

        const prevNodeElem = document.createElement('div');
        prevNodeElem.textContent = `Prev: ${currentNode.prevNode ? currentNode.prevNode.value : 'null'}`;
        prevNodeElem.style.fontSize = '12px';
        prevNodeElem.style.marginBottom = '5px';
        tileContainer.insertBefore(prevNodeElem, tile);

        container.appendChild(tileContainer);

        if (currentNode.nextNode) {
            const arrowContainer = document.createElement('div');
            arrowContainer.style.display = 'flex';
            arrowContainer.style.flexDirection = 'column';
            arrowContainer.style.justifyContent = 'center';

            const forwardArrow = createArrow('right');
            const backwardArrow = createArrow('left');

            arrowContainer.appendChild(forwardArrow);
            arrowContainer.appendChild(backwardArrow);

            container.appendChild(arrowContainer);
        }

        currentNode = currentNode.nextNode;
        index++;
    }

    return container;
}

function createArrow(direction) {
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('width', '40');
    arrow.setAttribute('height', '20');
    arrow.style.margin = '2px 0';

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', direction === 'right' ? '0' : '40');
    line.setAttribute('y1', '10');
    line.setAttribute('x2', direction === 'right' ? '30' : '10');
    line.setAttribute('y2', '10');
    line.setAttribute('stroke', 'black');
    line.setAttribute('stroke-width', '2');
    arrow.appendChild(line);

    const arrowHead = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrowHead.setAttribute('points', direction === 'right' ? '30,5 40,10 30,15' : '10,5 0,10 10,15');
    arrowHead.setAttribute('fill', 'black');
    arrow.appendChild(arrowHead);

    return arrow;
}


let chain = new LinkedList('first node');
chain.append('second node');
chain.append('third node');
chain.append(1);
chain.append('2');

chain.prepend('prepended node');

console.log(chain)
console.log(chain.size)
console.log(`node at 0: ${chain.at(0).value}, node at 3: ${chain.at(3).value}`)
console.log(chain.at(5))
console.log(chain.contains('2'))
console.log(chain.find('2'));
console.log(chain.find('second node'));
console.log(chain.insertAt(5,5))
console.log(chain)

const contentDiv = document.getElementById('content');
const visualizedList = visualizeLinkedList(chain);
contentDiv.appendChild(visualizedList)


