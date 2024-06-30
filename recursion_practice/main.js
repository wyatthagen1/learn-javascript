function fibs(fibnum){
    const outArr = [];
    for(let i=0;i<fibnum;i++){
        let next;
        if(i===0){
            next = 0;
        }else if(i===1){
            next = 1;
        }else{
            next = outArr[i-1] + outArr[i-2];
        }
        outArr.push(next);
    }
    return outArr;
}

function fibsRec(fibnum){
    if(fibnum < 1){
        throw new Error('fib num must be greater than 0')
    }else if(fibnum === 1){
        return [0];
    }else if(fibnum === 2){
        return [0,1];
    }else{
        let prev = fibsRec(fibnum-1)
        prev[prev.length] = prev[prev.length-1] + prev[prev.length-2];
        return prev
    }
}


// fibsRec(2) = [0, 1] ----> fibsRec(3) = [fibsRec(2), sum(fibsRec(2))]




console.log(fibs(8))

console.log(fibsRec(8))



function basicMergeSort(arr, start = 0, end = arr.length){
    if(end-start <=1){
        return [arr[start]] // stack frame memory problems for large arrays 
    }
    const mid = Math.floor((start + end)/2);
    const leftArr = basicMergeSort(arr,start,mid);
    const rightArr = basicMergeSort(arr,mid,end);
    return mergeSortedArrs(leftArr,rightArr) 
}

function mergeSortedArrs(leftArr, rightArr){
    let leftIndx = 0, rightIndx = 0, sorted = [];

    for(let i=0; i< (leftArr.length + rightArr.length);i++){
        let leftElm = leftArr[leftIndx], rightElm = rightArr[rightIndx];
        if(leftElm == null || rightElm == null){
            (leftElm == null) ? 
                sorted.push(...rightArr.slice(rightIndx,rightArr.length)) : 
                sorted.push(...leftArr.slice(leftIndx,leftArr.length));
            return sorted
        }
        else if(leftElm<rightElm){
            sorted[i] = leftElm; 
            leftIndx++
            leftElm = leftArr[leftIndx];
        }else if(rightElm<=leftElm){
            sorted[i] = rightElm;
            rightIndx++
            rightElm = rightArr[rightIndx];
        }
    }
}

console.log(basicMergeSort([3, 2, 1, 13, 8, 5, 0, 1]))



/*
function mergeSortOptimized(arr, start = 0, end = arr.length){
    if(arr.length === 0){
        console.log('array is empty');
    }
    if(end-start <=1){
        return start
    }
    const mid = Math.floor((start + end)/2);
    const leftStart = mergeSort(arr,start,mid);
    const rightStart = mergeSort(arr,mid,end);
    return mergeOptimized(arr,leftStart,rightStart,end) 
}

function mergeOptimized(arr,leftStart,rightStart,end){
    let sorted = [], leftIndx = leftStart, rightIndx = rightStart;

    for(let i=0; i< (end - leftStart);i++){
        let leftElm = arr[leftIndx], rightElm = arr[rightIndx];

        if(leftElm == null || rightElm == null){
            (leftElm == null) ? 
                sorted.push(...arr.slice(rightIndx,end)) : 
                sorted.push(...arr.slice(leftIndx,rightStart));
            return sorted

        }else if(leftElm<rightElm){
            sorted[i] = leftElm; 
            leftIndx++
            leftElm = arr[leftIndx];
        }else if(rightElm<=leftElm){
            sorted[i] = rightElm;
            rightIndx++
            rightElm = arr[rightIndx];
        }
        
    }
}


mergeOptimized([1,2])
*/
