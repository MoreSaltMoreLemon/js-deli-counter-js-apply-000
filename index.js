let deliLine = [];

function takeANumber(line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
}

function nowServing(line) {
  let first = line.shift();
  if (line.length == 0) {
    return "There is nobody waiting to be served!";
  } else {
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