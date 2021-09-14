function stringify(list) {
  result = "";
  result = JSON.stringify(new Node(list));
  let answer = result.replace(/[^+\d]/g, " ");
  answer = answer.replace(/\s{2,}/g, " ");
  answer = answer.substring(1);
  let answerOk = answer.replace(/\s{1,}/g, " -> ");
  answerOk = answerOk + "null";
  console.log(answerOk);
  return answerOk;
}
new Node(1, new Node(2, new Node(3)));
console.log(`${result}`);
