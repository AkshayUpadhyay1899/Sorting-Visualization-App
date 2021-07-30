function speed() {
    var ob = document.getElementById('cust_range');
    if(!ob.checkValidity())
    {
        document.getElementById('cust_range').innerHTML = ob.validationMessage;
    }
}