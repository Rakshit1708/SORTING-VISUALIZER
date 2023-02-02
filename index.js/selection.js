async function selection(){
    console.log('In selection()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length; i++){
        console.log('In ith loop');
        let min_index = i;
        // Change color of the position to swap with the next min
        ele[i].style.background = 'blue';
        for(let j = i+1; j < ele.length; j++){
            console.log('In jth loop');
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            await waitforme(delay);
            if(parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    // new min_index is found so change prev min_index color back to normal
                    ele[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                // if the currnent comparision is more than min_index change is back to normal
                ele[j].style.background = 'cyan';
            }   
        }
        await waitforme(delay);
        swap(ele[min_index], ele[i]);
        // change the min element index back to normal as it is swapped 
        ele[min_index].style.background = 'cyan';
        // change the sorted elements color to green
        ele[i].style.background = 'lime';
    }
}


const para=document.querySelector('p');

function myFunction2() {
  document.getElementById("Selection").innerHTML = "<br><h3>Selection Sort</h3>\nThe selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.<br>In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. <br></br><h4>Time Complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul>";

}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    para.innerHTML="<br><h3>Selection Sort</h3>\nThe selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning.<br>In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. <br></br><h4>Time Complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul><br><br><br>";
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
   // myFunction2();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});