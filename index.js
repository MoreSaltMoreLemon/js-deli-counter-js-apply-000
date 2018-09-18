let deliLine = [];
let lineNumber = 0;

function takeANumber(line, name) {
  lineNumber++;
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`;
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
  return `The line is currently: ${line.map((n, i) => `${i + 1}. ${n}`).join(", ")}`;
}