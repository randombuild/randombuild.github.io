function takeScreenshot() {
    html2canvas(document.querySelector("#frame"), {
      allowTaint: true,
      useCORS: true
    }).then(canvas => {
      canvas.toBlob(function(blob) {
        saveAs(blob, "randombuild.github.io.png");
      });
    });
  }