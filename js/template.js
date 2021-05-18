function head(title){
    var html = "";
    html += '<title>' + title + '</title>';
    html += "s"
    html += '<script>MathJax = {chtml:{matchFontHeight: false},tex:{inlineMath: [["$", "$"]]}};</script>'
    html += '<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>'
    document.write(html);
    }