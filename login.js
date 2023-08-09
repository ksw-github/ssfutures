const id = "김서우";
const pw = "123";

const userId = $("#userId");
const userPw = $("#userPw");

$("#login").on("submit", function(event){
  event.preventDefault();
  const valId = userId.val();
  const valPw = userPw.val();

  if(id === valId && pw === valPw){
    alert("로그인이 되었습니다.");
  } else if( id === valId ) {
    alert("비밀번호가 틀렸습니다.");
    userPw.focus();
  } else if( pw === valPw){
    alert("ID가 틀렸습니다.");
    userId.focus();
  } else {
    alert("아이디와 비밀번호가 모두 존재하지 않습니다.");
  }
});