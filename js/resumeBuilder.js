
var bio = {
    "name": "Tom Butterworth",
    "role": "Front-end Web Developer",
    "contacts": {
        "mobile": "(702) 985-5958",
        "email": "slooptb@gmail.com",
        "github": "slooptb",
        "twitter": "@SloopTomB",
        "location": "Las Vegas, NV"
    },
    "pictureURL": "images/197x148.gif",
    "welcomeMessage": "Hello my name is Tom...",
    "skills": ["HTML5", "CSS", "Git", "JavaScript", "jQuery", "Network+", "PHP", "mySQL", "Apache"],
    "display": function() {

        $("head").append(HTMLpageTitle.replace("%data%", bio.name));

        $(".navbar-header").append(HTMLheaderName.replace("%data%", bio.name))
            .append(HTMLheaderRole.replace("%data%", bio.role));

        $("#header").append(HTMLbioPic.replace("%data%", bio.pictureURL));

        if(bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for(var i=0;i<bio.skills.length;i++) {
                $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
            }
        }

        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile))
            .append(HTMLemail.replace("%data%", bio.contacts.email))
            .append(HTMLgithub.replace("%data%", bio.contacts.github))
            .append(HTMLtwitter.replace("%data%", bio.contacts.twitter))
            .append(HTMLlocation.replace("%data%", bio.contacts.location));

    }
};

var work = {
    "jobs": [
        {
            "employer": "William Hill US",
            "title": "Head of InPlay Trading",
            "location": "Las Vegas, NV",
            "dates": "Aug '13 - Present",
            "description": "Product manager of William Hill US InPlay."
        },
        {
            "employer": "William Hill",
            "title": "Soccer Odds Compiler",
            "location": "Leeds, England",
            "dates": "Nov '09 - Aug '13",
            "description": "Compiled soccer odds for betting on williamhill.com"
        }
    ],
    "display": function() {

        for(var job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            if(work.jobs.hasOwnProperty(job)) {
                var formattedJob = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) +
                    HTMLworkTitle.replace("%data%", work.jobs[job].title);
                $(".work-entry:last").append(formattedJob)
                    .append(HTMLworkDates.replace("%data%", work.jobs[job].dates))
                    .append(HTMLworkLocation.replace("%data%", work.jobs[job].location))
                    .append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
            }
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Wedding Website",
            "dates": "Oct '15",
            "description": "Custom designed wedding website",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Personal Portfolio",
            "dates": "Oct '15",
            "description": "Custom designed personal portfolio",
            "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
        }
    ],
    "display": function() {

        for(var project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            if(projects.projects.hasOwnProperty(project)) {
                $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title))
                    .append(HTMLprojectDates.replace("%data%", projects.projects[project].dates))
                    .append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
                if(projects.projects[project].images.length>0) {
                    for(var k=0;k<projects.projects[project].images.length;k++) {
                        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[k]));
                    }
                }
            }
        }
    }
};

var education = {
    "schools": [
        {
            "name": "College of Southern Nevada (CSN)",
            "location": "Las Vegas, NV",
            "degree": "Associate of Applied Science",
            "dates": "Expected completion fall 2016",
            "majors": ["Computer Science w/ software emphasis"],
            "url": "http://www.csn.edu/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Front-end Nanodegree",
            "school": "Udacity",
            "dates": "Expected completion Feb 2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Network+ Certification",
            "school": "Comptia",
            "dates": "Expected completion Dec 2015",
            "url": "https://certification.comptia.org/certifications/network"
        },
        {
            "title": "Full-stack Nanodegree",
            "school": "Udacity",
            "dates": "tba...",
            "url": "https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004"
        }
    ],
    "display": function() {

        for(var school in education.schools) {
            $("#education").append(HTMLschoolStart);
            if(education.schools.hasOwnProperty(school)) {
                $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) +
                    HTMLschoolDegree.replace("%data%", education.schools[school].degree))
                    .append(HTMLschoolDates.replace("%data%", education.schools[school].dates))
                    .append(HTMLschoolLocation.replace("%data%", education.schools[school].location))
                    .append(HTMLschoolMajor.replace("%data%", education.schools[school].majors))
            }
        }

        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);
        }

        for(var onlineCourse in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            if(education.onlineCourses.hasOwnProperty(onlineCourse)) {
                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) +
                    HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school))
                    .append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates))
                    .append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
            }
        }

    }
};

// Moved section checking from index.html to resumeBuilder.js file
var sectionChecker = function() {
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('topContacts').style.display = 'none';
    }
    if (document.getElementsByTagName('img').length === 0) {
        document.getElementById('header').style.display = 'none';
    }
    if (document.getElementsByClassName('work-entry').length === 0) {
        document.getElementById('workExperience').style.display = 'none';
    }
    if (document.getElementsByClassName('project-entry').length === 0) {
        document.getElementById('projects').style.display = 'none';
    }
    if (document.getElementsByClassName('education-entry').length === 0) {
        document.getElementById('education').style.display = 'none';
    }
    if (document.getElementsByClassName('flex-item').length === 0) {
        document.getElementById('lets-connect').style.display = 'none';
    }
    if (document.getElementById('map') === null) {
        document.getElementById('mapDiv').style.display = 'none';
    }
}


bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});

// Call function that was previously in index.html
sectionChecker();



