// this snipped fixes the height of the bootstrap .navbar-collapse, since it is somehow broken.
// my guess is, that this happens because there are several things mixed in this theme. things
// like bootstrap, jquery, hux-blog and so on. thanks to https://github.com/stefanladner for the help.
$('.navbar-toggle').click(function () {
  $('#huxblog_navbar.in .navbar-collapse').css('min-height', $('#huxblog_navbar.in .navbar-collapse ul').height())
});
