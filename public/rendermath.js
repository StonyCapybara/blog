setInterval(()=>{
  console.log("tried");
  try {
    MathJax.typeset();
  } catch (e) {
    console.error(e);
  }
}, 2000);