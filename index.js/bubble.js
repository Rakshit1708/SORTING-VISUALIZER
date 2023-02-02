async function bubble() {
    console.log('In bubbe()');
    const ele = document.querySelectorAll(".bar");
    for(let i = 0; i < ele.length-1; i++){
        console.log('In ith loop');
        for(let j = 0; j < ele.length-i-1; j++){
            console.log('In jth loop');
            ele[j].style.background = 'blue';
            ele[j+1].style.background = 'blue';
            if(parseInt(ele[j].style.height) > parseInt(ele[j+1].style.height)){
                console.log('In if condition');
                await waitforme(delay);
                swap(ele[j], ele[j+1]);
            }
            ele[j].style.background = 'cyan';
            ele[j+1].style.background = 'cyan';
        }
        ele[ele.length-1-i].style.background = 'lime';
    }
    ele[0].style.background = 'lime';
}

/*



function myFunction() {
  document.getElementById("Bubble").innerHTML = "<br><h3>Bubble Sort</h3>\nBubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.<br></br><h4>Time complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul>";
}




const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    myFunction();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});

*/
let Default = document.querySelectorAll("#default");
let paragraph1=document.querySelector(".content");


 async function bubbleMain(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
   // myFunction();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
    }


    const bubSortbtn = document.querySelector(".bubbleSort" );
    bubSortbtn.addEventListener('click', ()=>{
        paragraph1.innerHTML="<br><h3>Bubble Sort</h3>\nBubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.<br></br><h4>Time complexity</h4><ul><li>Best Case Complexity &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp:&nbspO(N)</li><li>Average Case Complexity&nbsp:&nbspO(N<sub></sub><sup>2</sup>)</li><li>Worst Case Complexity&nbsp&nbsp&nbsp&nbsp :&nbspO(N<sub></sub><sup>2</sup>)</li></ul><br><br><br><br><br>"; bubbleMain()});
    