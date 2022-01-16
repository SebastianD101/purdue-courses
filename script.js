function purdueRedirect() {
    var subject = document.getElementById("subject").value;
    var course = document.getElementById("course").value;
    let a = document.createElement('a');
    if(subject !== "" && course !== "") {
        a.target = '_blank';
        a.href = 'https://selfservice.mypurdue.purdue.edu/prod/bzwsrch.p_catalog_detail?term=202220&subject=' + subject + '&cnbr=' + course;
        a.click();
    }
    setTimeout(clearDemo, 1000);
}

function redditRedirect() {
    var subject = document.getElementById("subject").value;
    var course = document.getElementById("course").value;
    let a = document.createElement('a');
    if(subject !== "" && course !== "") {
        a.target= '_blank';
        a.href = 'https://www.reddit.com/r/purdue/search?q=' + subject + '+' + course + '&restrict_sr=on&sort=new&t=all';
        a.click();
    }
}

function RMCRedirect() {
    var subject = document.getElementById("subject").value;
    var course = document.getElementById("course").value;
    let a= document.createElement('a');
    if(subject !== "" && course !== "") {
        a.target= '_blank';
        a.href= 'https://www.ratemycourses.io/purdue/course/' + subject + course;
        a.click();
    }
}