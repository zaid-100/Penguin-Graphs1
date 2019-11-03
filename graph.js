var penguinPromise=d3.json("classData.json");
penguinPromise. then(
    function(classroom) 
{    
console.log("works",classroom);                  
drawGraph(classroom)
    setup(classroom)   
})
var xs = d3.range(400)
var screen = {width: 600,
             height:500}
var setup = function(classroom)
{
    d3.select("svg")
    .attr("width",screen.width)
    .attr("height",screen.height)
}
var xscale = d3.scaleLinear()
xscale.domain([0,d3.max(quizes.grade,function(classroom){
    return classroom.grade
})])
xscale.range([0,screen.width])
console.log(xscale(40));
var yscale= d3.scaleLinear()
yscale.domain(
d3.min(classroom, function(p){return classroom.grade}),d3.max(classroom,function(classroom){return classroom.quizes.grade}))
yscale.range([screen.height,0]);
var drawGraph = function(classroom)
{
    d3.select("svg").selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx",function(classroom) {console.log(p.x); return classroom.quizes.day})
    .attr("cy",function(classroom){return classroom.quizes.grade})
    .attr("r",2)
}
