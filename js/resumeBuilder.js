/*
This is empty on purpose! Your code to build the resume will go here.
 */

 /*var name = "Edwin Ramos";
 var role = "Web Developer"
 var contactinfo= "test"
 var pictureurl = "images/fry.jpeg"
 var welcomemessage="welcome to lesson"
 var skills = ["programmer", "developer","python"]

 var formattedName = HTMLheaderName.replace("%data%", name);
 var formattedRole = HTMLheaderRole.replace("%data%", role);

 */

 /*var skills = ["programmer", "developer", "python"];

 var bio = {

   "name" : "Edwin Ramos",
   "role": "Web Developer",
   "contacts": {
   	"Mobile" : "321-325-6187",
   	"Email" : "ER3718@ATT.com",
   	"github" : "Ed-Ramos",
   	"Location" : "Orlando"
   },

   "welcomemessage" : "Welcome to my Resume",
   "skills": ["programmer ", "developer ", "python"],
   "biopic": "images/fry.jpg"
 }

/*bio.city = "orlando"*/
/*
 $("#header").prepend(formattedRole);
 $("#header").prepend(formattedName);


 $("#main").append(bio.name);

/*$("#main").append(bio.city);

var work = {};

work.position = "Network Design Engineer";
work.employer = "ATT";
work.years = 15;
work.Location = "Lake Mary";

/*var education = {};

education["name"] = "Stony Brook University";
education["years"] = "1983-1988";
education["city"] = "Stony Brook, NY";

 $("#main").append(work["position"]);
 $("#main").append(education.name);

*/


var work =
{

	"jobs": [

	{

	"employer": "ATT",
	"title": "Network Design Engineer",
	"location": "Orlando, Florida, USA",
	"dates": "2000-present",
	"description": "Design and plan Transport"

    },

    {

    "employer": "Air Force",
	"title": "Electronics Engineer",
	"location": "Melbourne, Florida, USA",
	"dates": "1996-2001",
	"description": " Design communications projects"

    }

  ]

}

var projects =
{

	"projects": [

  {

    "title": "Portfolio",
    "dates": "2016",
    "description": " Porfolio page using HTML and CSS",
    "images": ["images/197x148.gif", "images/197x148.gif"]

  },

  {
    "title": "Online Resume",
    "dates": "2016",
    "description": " online resume using javascript and Jquery",
    "images": ["images/197x148.gif", "images/197x148.gif"]

  }

 ]

}



var bio =
{

	"name": "Edwin Ramos",
	"role": "Web Developer",
	"welcomeMessage": " welcome to my resume project",
	"contacts": {
      "mobile": "407-325-6187",
      "email": "ER3718@ATT.COM",
      "github": "Ed-Ramos",
      "location": "Orlando, Florida, USA"

    },

    "skills": ["HTML", "CSS" , "Python", "JavaScript"],

    "biopic": "images/fry.jpg"


}



var education =
 {

    "schools":  [{
        	"name": "Stony Brook University",
  	        "Location": "Stony Brook, NY",
  	        "degree": "BS",
  	        "majors": ["Electrical Engineering"],
  	        "dates" :1988
        },

        {
  	        "name": "Syracuse University",
  	        "Location": "Syracuse, NY",
  	        "degree": "MS",
  	        "majors": ["Electrical Engineering"],
  	        "dates":1995
        },

        {
  	        "name": "University Of Florida",
  	        "Location": "Gainesville, FL",
  	        "degree": "MBA",
  	        "majors": ["Business Administration"],
  	        "dates":2004
        }

   ],

    "onlineCourses": [{
    	"title": "JavaScript Basics",
  	    "school": "Udacity",
  	    "dates": 2016,
  	    "url": "placeholder"

      },

      {
        "title": "JavaScript Basics",
  	    "school": "Udacity",
  	    "dates": 2016,
  	    "url": "placeholder"

      }

   ]
}


var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

$("#header").prepend(formattedwelcomeMsg);
$("#header").prepend(formattedbioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


if (bio.skills.length > 0)
{

  $("#header").append(HTMLskillsStart);

  for (var i=0; i<bio.skills.length; i++){

   var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
   $("#skills").append(formattedSkill);
  }

}

function displayWork()
{

  for (job in work.jobs)
  {

  $("#workExperience").append(HTMLworkStart);
  var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var employerInfo = formattedworkEmployer + formattedworkTitle;
  var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

  $(".work-entry:last").append(employerInfo);
  $(".work-entry:last").append(formattedworkLocation);
  $(".work-entry:last").append(formattedworkDates);
  $(".work-entry:last").append(formattedworkDescription);

  }

}

displayWork();


/*function inName(name){

nameArray=name.trim().split(" ");
console.log(nameArray);

 return( nameArray[0].toLowerCase()+nameArray[1].toUppperCase());

}

$("#main").append(internationalizeButton);

inName(bio.name);

*/


projects.display = function()

{

  for (project in projects.projects)
  {

     $("#projects").append(HTMLprojectStart);

     var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
     $(".project-entry:last").append(formattedprojectTitle);
     var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
     $(".project-entry:last").append(formattedprojectDates);
     var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
     $(".project-entry:last").append(formattedprojectDescription);

     if (projects.projects[project].images.length > 0){

        for (image in projects.projects[project].images){

     	var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedprojectImage);
     }

  }


  }

}

projects.display();


$("#mapDiv").append(googleMap);
