/*
  Vue.js ファイル分割デモ
  htmlファイルとjavascriptファイルを分割して動作させる例
*/

window.onload = function(){
    // window.onloadイベントの中で動作させる

    var loginName = new Vue({
        // ログイン名入力欄
        el: "#loginaccount",
        data: {
            loginaccountname: ""
        }
    })
    var loginPassword = new Vue({
        // パスワード入力欄
        el: "#loginpassword",
        data: {
            loginpassword: ""
        }
    })
    var loginSubmit = new Vue({
        // ログインボタンを押した時の挙動を定義
        el: "#loginsubmit",
        methods: {
            checklogin: function(event){
                // checkloginイベント(htmlファイル内で定義している)の内容を記述
                correctLoginName = "myLoginName"
                correctPassword = "mySecretPassword1234"
                console.log(loginName.$data.loginaccountname)
                console.log(loginPassword.$data.loginpassword)
                if ((loginName.$data.loginaccountname == correctLoginName) &&
                   (loginPassword.$data.loginpassword == correctPassword)) {
                       document.getElementById("loginResult").innerHTML = "Login Success !"
                   }
                else {
                    document.getElementById("loginResult").innerHTML = "Login Failed !"
                }
            }
        }
    })
}
