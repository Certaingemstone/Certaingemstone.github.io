document.getElementById("NAVMENU").innerHTML =
'<a class="navbar-brand" href="index.html">Home</a>' +
'<button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
  '<span class="navbar-toggler-icon"></span>' +
'</button>' +
'<div class="collapse navbar-collapse " id="navbarSupportedContent"><ul class="navbar-nav mr-4">' +
  '<li class="nav-item">' +
  '<a class="nav-link" data-value="about" href="about.html">About</a></li>'
  +
  '<li class="nav-item dropdown">' +
  '<a class="nav-link dropdown-toggle" href="index.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Works</a>'
  +
  '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
  '<a class="dropdown-item" href="science.html">Science</a>' +
  '<a class="dropdown-item" href="engineering.html">Engineering</a>' + 
  '<a class="dropdown-item" href="art.html">Art</a>' +
  '</div> </li>'
  +
  '<li class="nav-item"><a class="nav-link " data-value="contact" href="contact.html">Contact</a></li></ul>' +
'</div>';
