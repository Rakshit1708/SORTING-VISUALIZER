async function insertion(){
    console.log('In insertion()');
    const ele = document.querySelectorAll(".bar");
    // color
    ele[0].style.background = 'lime';
    for(let i = 1; i < ele.length; i++){
        console.log('In ith loop');
        let j = i - 1;
        let key = ele[i].style.height;
        // color
        ele[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(ele[j].style.height) > parseInt(key))){
            console.log('In while loop');
            // color
            ele[j].style.background = 'blue';
            ele[j + 1].style.height = ele[j].style.height;
            j--;

            await waitforme(delay);

            // color
            for(let k = i; k >= 0; k--){
                ele[k].style.background = 'lime';
            }
        }
        ele[j + 1].style.height = key;
        // color
        ele[i].style.background = 'lime';
    }
}


//let Default = document.querySelectorAll("#default");
let paragraph=document.querySelector(".content");


 async function instertionMain(){
        disableSortingBtn();
        disableSizeSlider();
        disableNewArrayBtn();
        await insertion();
        enableSortingBtn();
        enableSizeSlider();
        enableNewArrayBtn();
    }

const inSortbtn = document.querySelector(".insertionSort" );
inSortbtn.addEventListener('click', ()=>{
paragraph.innerHTML="<br><h3>Insertion Sort</h3>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br></br><h4>Time complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul><br><br><br><br><br>"; instertionMain()});

/*
,()=>{ Default.innerhtml="<br><h3>Insertion Sort</h3>Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.<br></br><h4>Time complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul>"
*/