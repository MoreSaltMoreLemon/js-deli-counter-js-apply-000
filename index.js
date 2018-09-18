let deliLine = [];
let lineNumber = 0;

function takeANumber(line, name) {
  lineNumber++;
  return `Welcome, ${name}. You are number ${line.push(lineNumber)} in line.`;
}

function nowServing(line) {
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
    let first = line.shift();
    return `Currently serving ${first}.`;
  }
}

function currentLine(line) {
  if (line.length == 0) return "The line is currently empty.";
  
  let lineList = "The line is currently:"
  for (let i = 0; i < line.length; i++) {
    lineList = `${lineList} ${i + 1}. ${line[i]}`
    if (i < line.length - 1) {
      lineList = lineList + ",";
    } 
  }
  return lineList;
}