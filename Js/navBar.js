var data="";
data+=`<div  class="navbar navbar-expand-lg bg-light">
<div class="container  my-1">
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item ">
            <a class="nav-link " aria-current="page" href="homePage.html">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="addNewProjectPart1.html">Projects</a>
        </li>
        <li class="nav-item dropdown ">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
            </a>
            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="chatBotPart1.html">Chatbot</a>
        </li>

    </ul>
    <ul class="navbar-nav ms-4  my-2 mb-lg-0">
        <li class="nav-item">
            <a class="navbar-icon" href="#"><img alt="icon" src="Images/icon.png" height="40rem"/></a>
        </li>
        <li class="nav-item ms-3 ">
            <p class="word-JSOORLogo-in-navbar">JSOOR</p>
        </li>             

    </ul>
    <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">Messages</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#">About <span class="wordJSOORInAbout">JSOOR</span></a>
        </li>
        <li class="nav-item d-flex dropdown">
            <a class="nav-link" href="signUpPage.html">Sign Up</a>
            <a class="nav-link" href="signInPage.html">Sign In</a>

        </li>
    </ul>
  </div>       
</div>
<div>
    <ul class=" d-flex justify-content-center">
        <li class="list-item-for-websites mx-2"><a href="https://www.linkedin.com/">in</a></li>
        <li class="list-item-for-websites mx-2"><a href="https://www.instagram.com/">ig</a></li>
        <li class="list-item-for-websites mx-2"><a href="https://twitter.com/?lang=ar">tw</a></li>
        <li class="list-item-for-websites mx-2"><a href="https://www.facebook.com/login/">FB</a></li>
        <li class="list-item-for-websites mx-2"><a href="https://www.youtube.com/">YT</a></li>
    </ul>
  </div>

</div>`;
window.document.getElementById("navBar").innerHTML=data;

{/* <img class="userImg" src="Images/Rectangle 2901.png" alt="img"> */}
