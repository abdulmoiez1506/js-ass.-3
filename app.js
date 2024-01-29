// PART-1

let Celsius = prompt("Enter the current temp. in Celsius.");

if (Celsius >= 30) {
  alert("It's a hot day!");
} else {
  alert("The weather is moderate");
}

// PART-2
function calculateresult(percentage) {
  if (percentage >= 90) {
    return "A";
  } else if (percentage >= 80) {
    return "B";
  } else if (percentage >= 70) {
    return "c";
  } else if (percentage >= 60) {
    return "D";
  } else {
    return "F";
  }
}

function getMarksheet() {
  var paper1Marks = Number(prompt("Enter marks of paper 1:"));
  var paper2Marks = Number(prompt("Enter marks of paper 2:"));
  var paper3Marks = Number(prompt("Enter marks of paper 3:"));

  var totalMarks = paper1Marks + paper2Marks + paper3Marks;
  var percentage = (totalMarks / 300) * 100;

  var grade = calculateresult(percentage);

  alert(
      "Paper 1: " + paper1Marks +
      "\nPaper 2: " + paper2Marks +
      "\nPaper 3: " + paper3Marks +
      "\n\nTotal Marks: " + totalMarks +
      "\nPercentage: " + percentage.toFixed(2) + "%" +
      "\nGrade: " + grade
  );
}