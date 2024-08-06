let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents")

function openTab(tabname) {
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// sidebar menu
let sideMenu = document.getElementById("sideMenu");
function oepnMenu() {
    sideMenu.style.right = "0"
}

function closeMenu() {
    sideMenu.style.right = "-200px"
}


// Google form script
  const scriptURL = 'https://script.google.com/macros/s/AKfycbykpYhi24fiGui-qPxAb-Wtf3cWmhwyqu2klTlpj6pvoVbjzy4Pj9Z4gTqqRF8nUKDHCw/exec'
  const form = document.forms['submit-to-google-sheet']

  //   form submit message show
  let msgBox = document.getElementById("msg");
// end

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // message
        msgBox.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msgBox.innerHTML = ""
        }, 5000);
        form.reset();
        // end
      })
      .catch(error => console.error('Error!', error.message))
  })


