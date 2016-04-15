
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

  ],


  "display": function()

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

    ],

    "display": function()

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


}



var bio =
{

	"name": "Edwin Ramos",
	"role": "Web Developer",
	"welcomeMessage": " Welcome to my Front-End Web Developer Resume project.  During this project i learned JavaScript and Jquery",
	"contacts": {
      "mobile": "407-325-6187",
      "email": "ER3718@ATT.COM",
      "github": "Ed-Ramos",
      "location": "Orlando, Florida, USA"

    },

    "skills": ["HTML", "CSS" , "Python", "JavaScript"],

    "biopic": "images/fry.jpg",

    "display":function()

    {
     var formattedName = HTMLheaderName.replace("%data%",bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
     var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
     var formattedHTMLemail = HTMLemail.replace("%data%",bio.contacts.email);
     var formattedHTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github);
     var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);


     //$("#topContacts").append(formattedHTMLmobile,formattedHTMLemail,formattedHTMLgithub,formattedHTMLlocation);

     $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);
     $("#topContacts").prepend(formattedHTMLlocation);
     $("#topContacts").prepend(formattedHTMLgithub);
     $("#topContacts").prepend(formattedHTMLemail);
     $("#topContacts").prepend(formattedHTMLmobile);
     $("#header").append(formattedbioPic);
     $("#header").append(formattedwelcomeMsg);



     if (bio.skills.length > 0)
     {

       $("#header").append(HTMLskillsStart);

       for (var i=0; i<bio.skills.length; i++){

        var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
        $("#skills").append(formattedSkill);
       }

    }


    //$("#topContacts").prepend(formattedHTMLmobile);

    $("#footerContacts").append(formattedHTMLmobile);
    $("#footerContacts").append(formattedHTMLemail);
    $("#footerContacts").append(formattedHTMLgithub);
    $("#footerContacts").append(formattedHTMLlocation);



    }


}



var education =
 {

    "schools":  [{
        	"name": "Stony Brook University",
  	        "location": "Stony Brook, NY",
  	        "degree": "Bachelors",
  	        "majors": ["Electrical Engineering"],
  	        "dates" :"1988"
        },

        {
  	        "name": "Syracuse University",
  	        "location": "Syracuse, NY",
  	        "degree": "Masters",
  	        "majors": ["Electrical Engineering"],
  	        "dates":"1995"
        },

        {
  	        "name": "University Of Florida",
  	        "location": "Gainesville, FL",
  	        "degree": "Masters",
  	        "majors": ["Business Administration"],
  	        "dates":"2004"
        }

   ],

    "onlineCourses": [{
    	"title": "JavaScript Basics",
  	    "school": "Udacity",
  	    "dates": "2016",
  	    "url": "https://www.udacity.com/nanodegree"

      },

      {
        "title": "Front End Web Developer Nano Degree",
  	    "school": "Udacity",
  	    "dates": "2016",
  	    "url": "https://www.udacity.com/nanodegree"

      }

   ],


    "display": function()

    {

      for (school in education.schools)
      {

         $("#education").append(HTMLschoolStart);
         var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
         var formattedschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
         var schoolInfo = formattedschoolName + formattedschoolDegree;
         $(".education-entry:last").append(schoolInfo);
         var formattedschoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
         $(".education-entry:last").append(formattedschoolDates);
         var formattedschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
         $(".education-entry:last").append(formattedschoolLocation);
         var formattedschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
         $(".education-entry:last").append(formattedschoolMajor);


      }

         $("#education").append(HTMLonlineClasses);

      for (course in education.onlineCourses)

       {

         $("#education").append(HTMLschoolStart);
         var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
         var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
         var onlineSchoolinfo = formattedonlineTitle + formattedonlineSchool;
         $(".education-entry:last").append(onlineSchoolinfo);
         var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
         $(".education-entry:last").append(formattedonlineDates);
         var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
         $(".education-entry:last").append(formattedonlineURL);


       }


    }


}



/*function inName(name){

nameArray=name.trim().split(" ");
console.log(nameArray);

 return( nameArray[0].toLowerCase()+nameArray[1].toUppperCase());

}

$("#main").append(internationalizeButton);

inName(bio.name);

*/

education.display();

bio.display();

work.display();

projects.display();


$("#mapDiv").append(googleMap);
