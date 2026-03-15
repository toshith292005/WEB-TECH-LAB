const SIZE = 6;
const BOX_ROWS = 2;
const BOX_COLS = 3;

const boardDiv = document.getElementById("sudoku-board");

for(let r=0;r<SIZE;r++){

for(let c=0;c<SIZE;c++){

let input=document.createElement("input");

input.type="number";
input.min=1;
input.max=6;

input.id=`cell-${r}-${c}`;

input.addEventListener("input",function(){
this.classList.add("user-input");
this.classList.remove("solved");
});

if(c===2) input.classList.add("border-right");
if(r===1 || r===3) input.classList.add("border-bottom");

boardDiv.appendChild(input);

}

}

function readGrid(){

let grid=[];

for(let r=0;r<SIZE;r++){

let row=[];

for(let c=0;c<SIZE;c++){

let value=document.getElementById(`cell-${r}-${c}`).value;

row.push(value===""?0:parseInt(value));

}

grid.push(row);

}

return grid;

}

function solveSudoku(){

let grid=readGrid();

if(!isValidStartingBoard(grid)){
alert("Invalid starting board");
return;
}

if(backtrack(grid)){
updateDOM(grid);
}
else{
alert("No solution exists");
}

}

function backtrack(grid){

for(let r=0;r<SIZE;r++){

for(let c=0;c<SIZE;c++){

if(grid[r][c]===0){

for(let num=1;num<=6;num++){

if(isValid(grid,r,c,num)){

grid[r][c]=num;

if(backtrack(grid)) return true;

grid[r][c]=0;

}

}

return false;

}

}

}

return true;

}

function isValid(grid,row,col,num){

for(let x=0;x<SIZE;x++){

if(grid[row][x]===num || grid[x][col]===num) return false;

}

let startRow=row-(row%BOX_ROWS);
let startCol=col-(col%BOX_COLS);

for(let i=0;i<BOX_ROWS;i++){

for(let j=0;j<BOX_COLS;j++){

if(grid[i+startRow][j+startCol]===num) return false;

}

}

return true;

}

function isValidStartingBoard(grid){

for(let r=0;r<SIZE;r++){

for(let c=0;c<SIZE;c++){

if(grid[r][c]!==0){

let temp=grid[r][c];

grid[r][c]=0;

let valid=isValid(grid,r,c,temp);

grid[r][c]=temp;

if(!valid) return false;

}

}

}

return true;

}

function updateDOM(grid){

for(let r=0;r<SIZE;r++){

for(let c=0;c<SIZE;c++){

let input=document.getElementById(`cell-${r}-${c}`);

if(input.value===""){
input.value=grid[r][c];
input.classList.add("solved");
}

}

}

}

function clearBoard(){

for(let r=0;r<SIZE;r++){

for(let c=0;c<SIZE;c++){

let input=document.getElementById(`cell-${r}-${c}`);

input.value="";
input.classList.remove("solved","user-input");

}

}

}
