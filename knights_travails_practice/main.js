const moveList = (function(){
    let adjList = [], boardLength = 8;
    for(let y=0;y< boardLength;y++){
        for(let x=0;x<boardLength;x++){
            let r2u1 = (x + 2 < 8 && y + 1 < 8) ? [x+2,y+1] : null; 
            let r1u2 = (x + 1 < 8 && y + 2 < 8) ? [x+1,y+2] : null;
            let r2d1 = (x + 2 < 8 && y - 1 >= 0) ? [x+2,y-1] : null; 
            let r1d2 = (x + 1 < 8 && y - 2 >= 0) ? [x+1, y-2] : null; 
            let l1d2 = (x - 1 >= 0 && y - 2 >= 0) ? [x-1, y-2] : null;
            let l2d1 = (x - 2 >= 0 && y - 1 >= 0) ? [x-2,y-1] : null;
            let l2u1 = (x - 2 >= 0 && y + 1 < 8) ? [x-2,y+1] : null;
            let l1u2 = (x - 1 >= 0 && y + 2 < 8) ? [x-1,y+2] : null;
            let all = [r2u1, r1u2, r2d1, r1d2, l1d2, l2d1, l2u1, l1u2]
            let moves = all.filter((move => {return move !== null}))
            adjList.push(moves)
        }
    }
    console.log(adjList)
    return adjList
})();

function indexOf(cords){
    let x = cords[0], y = cords[1];
    if (y === 0){
        return x
    }else{
        return y * 8 + x  // board size is 8 
    }
}


function knightMoves(start, end, moveList){
    let queue = [[start]];
    let i = 0;

    while(i<10000){
        // take current move set 
        let currMoves = queue[i]
        // take end move 
        let endMove = currMoves[currMoves.length - 1]
        // look at possible moves to end tile 
        // append all possible combinations of current move set and moves for end tile 
        let availMoves = moveList[indexOf(endMove)];
        for(let j=0; j< availMoves.length; j++){
            queue.push([...currMoves,availMoves[j]])
            if (availMoves[j][0] === end[0] && availMoves[j][1] == end[1]){
                prettyPrint(queue[queue.length - 1])
                return 
            }
        }

        i++   
    }

}

function prettyPrint(array){
    console.log(`Congrats, you made it in ${array.length} steps! Here is your path:`)
    for(let i=0;i<array.length;i++){
        console.log(`[${array[i][0]},${array[i][1]}]`)
    }
}

knightMoves([7,7],[0,0],moveList)