# В данном проекте используются следующие библиотеке:

- **react**
- **typescript**
- **react-toolkit**
- **axios**
- **react-router-dom**
- **react-hook-form**
- **Material UI**
- **gh-pages**


## Что бы запустить проект необходимо:
склонировать его и прописать команду yarn в консоли для того что бы установились все библиотеки

Работает оно следующим образом вводим в поле из личного кабинета пользователя следующие данные:
idInstance
 и
apiTokenInstanc   
и нажимаем войти. Эти данные сохраняются в стэйте и затем передаются в запросле для идентефикации пользователя

Затем вводим в поле создать чат номер телефона без "+" пример "79250000000" или название чата(в случае если чат имеет имя отличное от номера телефона) эти данные тоже сохраняются в стэйте и затем цепляются в санке к запросу на Api

И можем наслаждаться перепиской как в whatsApp

