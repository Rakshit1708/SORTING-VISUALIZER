
async function partitionLomuto(ele, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    // color pivot element
    ele[r].style.background = '#ff';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        // color current element
        ele[j].style.background = 'yellow';
        // pauseChamp
        await waitforme(delay);

        if(parseInt(ele[j].style.height) < parseInt(ele[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(ele[i], ele[j]);
            // color 
            ele[i].style.background = 'orange';
            if(i != j) ele[j].style.background = 'orange';
            // pauseChamp
            await waitforme(delay);
        }
        else{
            // color if not less than pivot
            ele[j].style.background = 'pink';
        }
    }
    i++; 
    // pauseChamp
    await waitforme(delay);
    swap(ele[i], ele[r]); // pivot height one
    console.log(`i = ${i}`, typeof(i));
    // color
    ele[r].style.background = 'pink';
    ele[i].style.background = 'lime';

    // pauseChamp
    await waitforme(delay);
    
    // color
    for(let k = 0; k < ele.length; k++){
        if(ele[k].style.background != 'lime')
            ele[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(ele, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'lime';
            ele[l].style.background = 'lime';
        }
    }
}

const para2= document.querySelector('p');
/*
function myFunction4() {
    document.getElementById("Quick").innerHTML ="<br><h3>Quick Sort</h3>\n Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.<br> After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.<br></br><h4>Time Complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N log(N))</li><li>Average Case Complexity&nbsp:&nbspO(N log(N))</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul>";;
  
  }

*/
const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
   para2.innerHTML= "<br><h3>Quick Sort</h3>\n Quicksort picks an element as pivot, and then it partitions the given array around the picked pivot element. In quick sort, a large array is divided into two arrays in which one holds values that are smaller than the specified value (Pivot), and another array holds the values that are greater than the pivot.<br> After that, left and right sub-arrays are also partitioned using the same approach. It will continue until the single element remains in the sub-array.<br></br><h4>Time Complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N log(N))</li><li>Average Case Complexity&nbsp:&nbspO(N log(N))</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul><br><br>";
    let ele = document.querySelectorAll('.bar');
    let l = 0;
    let r = ele.length - 1;

    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
   // myFunction4();
    await quickSort(ele, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});