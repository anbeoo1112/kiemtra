// coding implementation

document.getElementById('myForm').addEventListener('submit', function (e) {
    var email = document.getElementById('email').value;
    var rate = document.getElementById('rate').value;
    var comment = document.getElementById('com').value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email.trim()===''){
        alert("Vui lòng điền email !");
    }
    else if (!emailPattern.test(email)){
        alert('Vui lòng điền lại email theo đúng mẫu !')
    }
    else if (isNaN(rate) || rate < 1 || rate > 5) {
        e.preventDefault();
        alert('Vui lòng Rating (1-5).');
    }
    else if (comment.trim()===''){
        e.preventDefault();
        alert('Vui lòng viết comment!.')
    }
    else{
        alert('Success !');
    }
});
// end coding implementation