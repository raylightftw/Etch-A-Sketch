
var grids=[];
for(var i=0;i<16;i++)
{   grids[i]=document.createElement('div');
    grids[i].classList.add('Grids');
    document.querySelector('.Grid').appendChild(grids[i]);
}

var grids2=document.getElementsByClassName('Grids')

/*for(var i=0;i<grids2.length;i++)
{
grids2[i].addEventListener('mouseover',function(e) {
    console.log(e.classList)
})

}
*/

var grid_array=[...grids2];
grid_array.forEach(div => div.addEventListener('mouseover',function() {
    div.classList.add('Hovered')
} ) )