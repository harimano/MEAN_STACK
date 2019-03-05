
function binarySearch(arr,val){
    start = 0, end = arr.length-1;

    while(start>=end){

        mid = Math.floor((start+mid)/2);

        if(arr[mid]===val){
            return true;
        }
        else if (arr[mid]<val){
            start = mid + 1;
        }
        else{
            end = mid -1;
        }
    }
    return false;
}
