
var work =
{

	"jobs": [

	{

	"employer": "ATT",
	"title": "Network Design Engineer",
	"location": "Orlando, Florida, USA",
	"dates": "2008-present",
	"description": "Responsible for all Ethernet and DS3 and above transport requirements to support all carrier launches, BTS and RNC rehomes, EVC upspeeds, 4G LTE, and optimization work.Design all Ethernet Collectors, DS3 and OCn circuits in granite.  Troubleshoot as needed. Initiate all mobility provisioning orders and track to completion.Work with Layer 3 on all CBB circuits. Responsible for MTSO access and final connectivity.  Partner with Capacity Planning on developing 0-2 year TFORCE circuit forecast.Manage the implementation of all new transport infrastructure needed to support TFORCE forecast.  Develop transport plans for DAS and RNC rehomes.Manage and monitor capacity of transport related equipment (DCS, ADM, etc.) ensuring capacity is used cost effectively.  Perform trend analysis and efficiently deploy and use the network inventory in the 0-12 month timeframe.  Minimize capital expenses by issuing transport grooming plans and eqpt redeployment plans. esponsible for proper network diversity to increase reliability and minimize outages.Responsible for representing the SouthEast Region in the development of various Job Aids.Designated Subject Matter Expert (SME) for SouthEast Layer 0/1 Capacity Management."


    },

    {

    "employer": "ATT",
	"title": "Transport Engineer",
	"location": "Orlando, Florida, USA",
	"dates": "2004-2008",
	"description": " Lead Engineer on the NFL transport optimization and savings projects. Obtained over $10 million in transport savings over 3 years.Ownership of all transport planning and designs and facility designs (including T1s, DS3s, OCn, DWDM and microwave connectivity) for the NFL market.Led teams of provisioning and transport network engineers during NFL’s UMTS and GSM technology conversions. Designed transport architecture then planned and organized workload for the team.  Project managed hierarchy system turn-up.Designed, sized, and implemented the installation of various MTSO Digital Cross-Connect Systems (Tellabs and Alcatel) and GPS timing system.Used least cost routing and routing redundancy principles.Worked with the interconnect group on all trunking plans and advised on transport issues.Team leader to provisioning and CPDO junior engineers. Ensured that orders and path designs were done accurately.  Trained them on the NFL transport network.Developed the NFL Cingular/ATT Wireless cell site integration transport plan.  Plan included over 2000 cell sites and seven MTSOs. Worked with project managers in ensuring that transport capacity was available to meet all BTS rehome timelines.Designed and implemented many fiber SONET rings with various LECs.Designed transport footprint for the turn-up of three new MTSOs.  This included placement of DACCS, ATM nodes, Telco SONET ring nodes, DWDM inter-MTSO nodes and all associated electrical and optical patch panels. Worked closely with Operations and vendor personnel to resolve any facilities issues and insured that schedule was met.Published microwave enhancement plans for NFL to insure capacity available for GSM and to eliminate single points of failure."

    }

  ],


  display: function()

  {

  for (job in work.jobs)
  {

  $("#workExperience").append(HTMLworkStart);
  var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedworkEmployer = formattedworkEmployer.replace("#", "https://att.com");
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
       "images": ["images/data.jpg", "images/data2.jpg"]

     },

     {
       "title": "Online Resume",
       "dates": "2016",
       "description": " online resume using javascript and Jquery",
       "images": ["images/networking.png", "images/networking2.png"]

     }

    ],

    display: function()

    {

      for (project in projects.projects)
     {

       $("#projects").append(HTMLprojectStart);

       var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
       var formattedprojectTitle = formattedprojectTitle.replace("#", "https://github.com");

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

    display:function()

    {
     var formattedName = HTMLheaderName.replace("%data%",bio.name);
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
     var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
     var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
     var formattedHTMLmobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
     var formattedHTMLemail = HTMLemail.replace("%data%",bio.contacts.email);
     var formattedHTMLgithub = HTMLgithub.replace("%data%",bio.contacts.github);
     var formattedHTMLlocation = HTMLlocation.replace("%data%",bio.contacts.location);


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
  	        "dates" :"1988",
  	        "url" : "http://www.stonybrook.edu"
        },

        {
  	        "name": "Syracuse University",
  	        "location": "Syracuse, NY",
  	        "degree": "Masters",
  	        "majors": ["Electrical Engineering"],
  	        "dates":"1995",
  	        "url" : "http://www.syr.edu"
        },

        {
  	        "name": "University Of Florida",
  	        "location": "Gainesville, FL",
  	        "degree": "Masters",
  	        "majors": ["Business Administration"],
  	        "dates":"2004",
  	        "url" : "http://www.ufl.edu"
        }

   ],

    "onlineCourses": [{
    	"title": "JavaScript Basics",
  	    "school": "Udacity",
  	    "date": "2016",
  	    "url": "https://www.udacity.com/course/javascript-basics--ud804"

      },

      {
        "title": "Front End Web Developer Nano Degree",
  	    "school": "Udacity",
  	    "date": "2016",
  	    "url": "https://www.udacity.com/nanodegree"

      }

   ],


    display: function()

    {

      for(var school=0; school<education.schools.length; school++)

      {

         $("#education").append(HTMLschoolStart);
         var formattedschoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
         var formattedschoolName = formattedschoolName.replace("#",education.schools[school].url);
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

        for(var course=0; course<education.onlineCourses.length; course++)
       {

         $("#education").append(HTMLschoolStart);
         var formattedonlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
         var formattedonlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
         var onlineSchoolinfo = formattedonlineTitle + formattedonlineSchool;
         $(".education-entry:last").append(onlineSchoolinfo);
         var formattedonlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].date);
         $(".education-entry:last").append(formattedonlineDates);
         var formattedonlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
         var formattedonlineURL = formattedonlineURL.replace("#",education.onlineCourses[course].url);
         $(".education-entry:last").append(formattedonlineURL);

       }


    }


}


education.display();

bio.display();

work.display();

projects.display();


$("#mapDiv").append(googleMap);
