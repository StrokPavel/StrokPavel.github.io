function down() {
  var a = document.getElementById('dropdown');
  if (a.style.display == 'none')
    a.style.display = 'block';
  else
  if (a.style.display == 'block')
    a.style.display = 'none';
};

var win = null;

function NewWindow(mypage,myname,w,h,scroll){
  var a = document.getElementById('NewWindow');
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable'
win = window.open(mypage,myname,settings)
}
