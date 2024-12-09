let arr=[7,8,9,1,2,3];
let target=1;
let left = 0;
let right = arr.length-1;

function search (arr,target){
    while(left<=right){
        let mid=Math.floor((left+right)/2);

        if(arr[mid]==target){
           return mid;
        }
        if(arr[left]<=arr[mid]){
            if(target>=arr[left]&&target<arr[mid]){
                right=mid-1;
            }else{
                left=mid+1;
            }
        }
        else{
            if(target>arr[left]&&target<=arr[mid]){
                right=mid+1;
            }else{
                left=mid+1;
            }
        }

    }
    return -1;
}
console.log(search(arr,target));