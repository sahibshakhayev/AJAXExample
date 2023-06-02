var input = document.getElementById("userInput"); 
var button = document.getElementById("searchButton"); 
var output = document.getElementById("output"); 


button.addEventListener("click", function() {
  
  var userLogin = input.value;
  
  if (userLogin) {
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/" + userLogin);
    xhr.send();
    xhr.onreadystatechange = function() {
        
        if (xhr.readyState == 4) {
       
          if (xhr.status == 200) {
            
            var user = JSON.parse(xhr.responseText);
            
            var html = "<div class='info'>";
            html += "<img src='" + user.avatar_url + "' alt='Фото'>"; 
            html += "<div class='text-info'>"
            html += "<p>Имя: " + (user.name || "нет данных") + "</p>"; 
            html += "<p>Логин: " + user.login + "</p>"; 
            html += "<p>Ссылка на GitHub: <a href='" + user.html_url + "'>" + user.html_url + "</a></p>"; 
            html += "<p>Ссылка на блог: " + (user.blog || "нет данных") + "</p>"; 
            html += "<p>Город: " + (user.location || "нет данных") + "</p>"; 
            html += "<p>Почта: " + (user.email || "нет данных") + "</p>"; 
            html += "<p>Количество подписчиков: " + user.followers + "</p>"; 
            html += "<p>Количество подписок: " + user.following + "</p>"; 
            html += "</div></div>"
           
            output.innerHTML = html;
          } else if (xhr.status == 404) {
            
            output.innerHTML = "<p id='red'>Нет такого пользователя!</p>";
          }
        }
    }
  }
});
