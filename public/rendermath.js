setInterval(()=>{
  console.log("tried");
  try {
    MathJax.typeset();
  } catch (e) {
    console.error(e);
    // location.assign(location.pathname);
  }
}, 2000);