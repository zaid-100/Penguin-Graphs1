var penguinPromise= d3.json("classData.json");
penguinPromise.then(function(classroom)
{
 var EveryDay = d3.range(39)
console.log("classroom", classroom);
 var daysummary = getGrade(classroom, 0)  
 console.log(daysummary)
    console.log(Data(daysummary))
    setup(Data(daysummary))
    EveryDay.forEach(function(num)
            {
        term(classroom, num)
        }
        )
    Data(daysummary);
}
,    
 function(err)
{console.log("fail", err) })


var getGrade = function(classroom, day)
{
    var quizGrade = classroom.map(function(d)
    {
    return    d.quizes[day].grade
   })
    return quizGrade;
}

var term = function(classroom, day)
{
    d3.select("body")
    .append("button")
    .text("day" + day).on("click", function ()
    {
        var daysummary = getGrade(classroom, day)
        d3.selectAll("svg *").remove()
        setup(Data(daysummary))
    })
    }
var Data = function(daysummary)
{
    var cords = daysummary.map(function(quiz, i)
    {return {x : i,
        y: quiz}
    
    })
    return cords
}
var screen = {
    width: 1000, height: 800
}
  var setup = function(cords)
  {
      var xScale = d3.scaleLinear()
      xScale.domain([0,22])
      xScale.range([screen.width,0])
      
      var yscale = d3.scaleLinear()
      yscale.domain([10,0])
      yscale.range([screen.width,0])
      drawcords(cords, xScale, yscale)
      }
    var drawcords = function(cords , xScale, yscale)
    {
        d3.select("svg")
        .attr("height", screen.height)
        .attr("width", screen.width)
        .selectAll("circle").data(cords).enter()
        .append("circle")
        .attr("cx", function(p) {return xScale(p.x)})
        .attr("cy", function(p){return yscale(p.y)})
        .attr("r", 4)
    }
    var penguinPromise= d3.json("classData.json");
    var Days = d3.range(1,39)