document.getElementById("password").addEventListener("input", function(event) {
    this.value = this.value.replace(/\D/g, ""); 
});
document.getElementById("togglePassword").addEventListener("click", function(){
    const showPW = document.getElementById("password")
    const icon = document.querySelector(".material-symbols-outlined");
    if (showPW.type === "password") {
        showPW.type = "text";
        icon.textContent = "visibility"; 
    } else {
        showPW.type = "password";
        icon.textContent = "visibility_off"; 
    }
})
function fecharPagina() {
    window.open('', '_self').close();
}
