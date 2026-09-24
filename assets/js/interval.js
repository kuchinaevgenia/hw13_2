function printNumbers(from, to, interval) {
  let i = from;
  function intervalPrint() {
    console.log(i);
    if (i >= to) {
      clearInterval(intervalId);
    }
    i++;
  }
  const intervalId = setInterval(intervalPrint, interval);
}

printNumbers(1, 10, 1000);
