var penguinPromise= d3.json("classData.json");
penguinPromise.then(
    function(classroom, day) 
    {    
    console.log("works",classroom);                     /* setup(classroom);
    drawGraph(classroom);
    quizgrade(classroom);*/
    console.log(makear(classroom, 0));
var getday = makear(classroom, 0);
    makegraph(getday, 0) ;
    setup(classroom);
    })
var screen = {width: 600,
             height:500}
var setup = function(classroom)
    {
    d3.select("svg")
    .attr("width",600)
    .attr("height",500);

    var xscale = d3.scaleLinear()
    xscale.domain([0,39])
    xscale.range([screen.width,0]);
    var yscale= d3.scaleLinear()
    yscale.domain([0,screen.width])
    yscale.range([screen.height,0]);
    }

var getquiz = function(penguin)
    {
    return penguin.quizes[0].grade;
    }
// array Function
var makear = function(classroom, day)
        {
        return classroom.map(function(penguin, day)
        {
        return penguin.quizes[day].grade;
        })
        }
// the x and Y attributes don't show up but the "r" does.
//the array for day 1 is made.
var makegraph = function(getday)
    {
    d3.select("svg").selectAll("circle")
    .data(getday)
    .enter()
    .append("circle")
    .attr("cx", function(getday, day)
    {
    return day*10
    })
    .attr("cy",function(getday)
    {
     return getday*10
    }
    )
    .attr("r",4)    
    }

d3.select("#next").on("click", function (d)
{   d3.selectAll("circle").remove();
    var dayinc = function(classroom, day)
        {
            console.log("works")
        return classroom.map(function(penguin, day)
        {
        return penguin.quizes[day+1].grade;
        }
        )
        var getday = dayinc(classroom, day);
            console.log("working");
            makegraph(getday, day) ;    
        }
    dayinc(classroom, day);
    makegraph(getday, day);
})



/*d3.min(quizes, function(d){return    d.grade}),d3.max(quizes,function(d){return d.quizes.grade})*/