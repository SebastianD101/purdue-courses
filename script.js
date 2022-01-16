function purdueRedirect() {
    document.getElementById("subject").style.borderColor = "white";
    document.getElementById("course").style.borderColor = "white";
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
    document.getElementById("subject").style.borderColor = "white";
    document.getElementById("course").style.borderColor = "white";
    var subject = document.getElementById("subject").value;
    var course = document.getElementById("course").value;


    if (course.substring (3, 5) === "00") {
        course = course.substring(0, 3);
    }

    
    let a = document.createElement('a');
    if(subject !== "" && course !== "") {
        a.target= '_blank';
        a.href = 'https://www.reddit.com/r/purdue/search?q=' + subject + '+' + course + '&restrict_sr=on&sort=top&t=all';
        a.click();
    }
    setTimeout(clearDemo, 1000);
}

function RMCRedirect() {
    document.getElementById("subject").style.borderColor = "white";
    document.getElementById("course").style.borderColor = "white";
    var subject = document.getElementById("subject").value;
    var course = document.getElementById("course").value;
    let a= document.createElement('a');
    if(subject !== "" && course !== "") {
        a.target= '_blank';
        a.href= 'https://www.ratemycourses.io/purdue/course/' + subject + course;
        a.click();
    }
    setTimeout(clearDemo, 1000);
}

function clearDemo()
{
    document.getElementById("subject").style.borderColor = '#CEB888';
    document.getElementById("course").style.borderColor = '#CEB888';
}