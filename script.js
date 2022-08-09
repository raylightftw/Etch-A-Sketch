
var grids=[];
for(var i=0;i<16;i++)
{   grids[i]=document.createElement('div');
    grids[i].classList.add('Grids');
    document.querySelector('.Grid').appendChild(grids[i]);
}
greatHover();
var newGrid=4;
var button=document.querySelector('.newsize')
button.addEventListener('click',()=>{askUser()})
var newgrids=[];
var grid=document.querySelector('.Grid')
function askUser()
{
    newGrid=prompt("Enter new grid size!",4);
    while (grid.childElementCount!=0)
    {
        grid.innerHTML="";
    }
    for(var i=0;i<Math.pow(newGrid,2);i++)
    {   /*document.querySelector('.Grid').style.gridTemplateRows= `repeat(${newGrid}, 1fr);`
        document.querySelector('.Grid').style.gridTemplateColumns=`repeat(${newGrid}, 1fr);`*/
        grid.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${newGrid}, 1fr)` ;
        newgrids[i]=document.createElement('div');
        newgrids[i].classList.add('Grids');
        document.querySelector('.Grid').appendChild(newgrids[i]);
        greatHover()
    }

}

function greatHover()
{
var grids2=document.getElementsByClassName('Grids')
var grid_array=[...grids2];
grid_array.forEach(div => div.addEventListener('mouseover',function() {
    div.classList.add('Hovered')
    
} ) )
}

clear=document.querySelector('.clear')
clear.addEventListener('click',()=>{greatClear()})


function greatClear()
{   
    console.log(newGrid);
    grid.innerHTML="";
    for(var i=0;i<Math.pow(newGrid,2);i++)
    {   grid.style.gridTemplateColumns = `repeat(${newGrid}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${newGrid}, 1fr)` ;
        newgrids[i]=document.createElement('div');
        newgrids[i].classList.add('Grids');
        document.querySelector('.Grid').appendChild(newgrids[i]);
        greatHover()
    }
}

//https://imgur.com/bkyienb.png