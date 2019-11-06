var penguinPromise=d3.json("classData.json");
penguinPromise. then(
    function(classroom) 
{    
console.log("works",classroom);                 /* setup(classroom);
drawGraph(classroom);
    quizgrade(classroom);*/
    console.log(makear(classroom));
})
var xs = d3.range(400)
var screen = {width: 600,
             height:500}
var setup = function(quizes)
    {
    d3.select("svg")
    .attr("width",screen.width)
    .attr("height",screen.height)

    var xscale = d3.scaleLinear()
    xscale.domain([0,d3.max(quizes.grade,function(d){
    return d.grade
    })])
    xscale.range([0,screen.width]);
    var yscale= d3.scaleLinear()
    yscale.domain(
    d3.min(quizes, function(d){return    d.grade}),d3.max(quizes,function(d){return d.quizes.grade}))
    yscale.range([screen.height,0]);
}


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
var getquiz = function(penguin)
    {
        console.log(penguin)
    return penguin.quizes[0].grade;
    }


var makear = function(classroom)
        {
     return classroom.map(getquiz)
        }