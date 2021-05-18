function head(title){
    var html = "";
    html += '<title>' + title + '</title>';
    html += '<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>';
    html += '<script type="text/x-mathjax-config">';
    html += 'MathJax.Hub.Config({';
    html += 'TeX: { equationNumbers: { autoNumber: "AMS" }},';
    html += 'tex2jax: {';
    html += 'inlineMath: [ ["$","$"], ["\\(","\\)"] ],';
    html += 'processEscapes: true';
    html += '},';
    html += '"HTML-CSS": { matchFontHeight: false },';
    html += 'displayAlign: "left",';
    html += 'displayIndent: "2em"';
    html += '});</script>';
    document.write(html);
    }