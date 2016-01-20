

// the bio object contains  personal information and contact details
var bio = {
    name: "Lucy Moore",
    role: "Web/Software Developer",
    welcomeMsg: "Hello All! Welcome to my resume",
    skills: ["Java", "HTML5", "javaScript", "UML", "SQL", "CSS"],
    image: 'image/fry.jpg',
    contact: { 
      "phone": "0272741511",
      "email": "lucyviolet.moore@gmail.com",
      "skype": "lucyviolet1",
      "location": "Wellington, New Zealand",
      "github": "LucyMoore",
      
    },
};

bio.displayBio = function() {

    var formattedRole = HTMLheaderRole.replace("%data%",bio.role)
    $("#header").prepend(formattedRole)

    formattedName = HTMLheaderName.replace("%data%",bio.name)
    $("#header").prepend(formattedName)

  // contact details at the top of the page:
    var formattedPhone = HTMLmobile.replace("%data%",bio.contact.phone)  
    $("#topContacts").append(formattedPhone)
    var formattedEmail = HTMLemail.replace("%data%",bio.contact.email)  
    $("#topContacts").append(formattedEmail)
    var formattedGit = HTMLgithub.replace("%data%",bio.contact.github)  
    $("#topContacts").append(formattedGit)
    var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location)  
    $("#topContacts").append(formattedLocation)
    var formattedImage = HTMLbioPic.replace("%data%",bio.image)
    $("#topContacts").append(formattedImage)

  // contact details at the bottom of the page:
    var formattedPhone = HTMLmobile.replace("%data%",bio.contact.phone)  
    $("#footerContacts").append(formattedPhone)
    var formattedEmail = HTMLemail.replace("%data%",bio.contact.email)  
    $("#footerContacts").append(formattedEmail)
    var formattedGit = HTMLgithub.replace("%data%",bio.contact.github)  
    $("#footerContacts").append(formattedGit)
    var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location)  
    $("#footerContacts").append(formattedLocation)

  // displaying the skills:
    $("#header").append(HTMLskillsStart);
      for(index = 0; index < bio.skills.length; index++){
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[index]);
        $("#header").append(formattedSkills);
      }
};
//call the function
bio.displayBio();

// object containing work history information
var work = {
  job: [
  {
    employer: "Fujitsu New Zealand",
    dates: "2015-2016",
    title: "Hotstaging Technician (secondment)",
    location: "Wellington",
    description: "repairing desktops and laptops, installing operation systems, delivering equipment"
  },
  {
    employer: "Fujitsu New Zealand",
    dates: "2014-2015",
    title: "Project Coordinator (secondment)",
    location: "Wellington",
    description: "description"
  },
  {
    employer: "Fujitsu New Zealand",
    dates: "2012-2014",
    title: "Service Desk Analyst",
    location: "Wellington",
    description: "description"
  } 
   ]
  };

//function to display work history to the resume
work.displayWork = function(){

    for(var key in work.job){

      $("#workExperience").append(HTMLworkStart);
      
      var formattedEmp = HTMLworkEmployer.replace("%data%", work.job[key].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.job[key].title);
      var formattedEmpTitle = formattedEmp + formattedTitle
      $(".work-entry:last").append(formattedEmpTitle)
      var formattedLocation = HTMLworkLocation.replace("%data%", work.job[key].location);
      $(".work-entry:last").append(formattedLocation)
      var formattedDates = HTMLworkDates.replace("%data%", work.job[key].dates);
      $(".work-entry:last").append(formattedDates)
      var formattedDescription = HTMLworkDescription.replace("%data%", work.job[key].description);
      $(".work-entry:last").append(formattedDescription)
    }
};
// calling the function
work.displayWork();

// object holding all study information
var education = {
    schools: [
  {
           name: "Computer Power Plus",
           years: "2012",
           schoolCity: "wellington",
           qualification: "Diploma in Software Development (Java)"
  },
  {
          name: "Natcol Design Technology",
          years: "2008",
          schoolCity: "Wellington",
          qualification: "Diploma in Video Post Production",
  },
  {
          name: "Natcol Design Technology",
          years: "2007",
          schoolCity: "Wellington",
          qualification: "Diploma in Multi Media",
  }
    ],
  
    onlineCourses: [
    {
      title: "blank",    
      school:  "blank",
      dates: "blank"
  }   
  ]
  };

 education.displayEdu = function(){
    for(var key in education.schools){

          $("#education").append(HTMLschoolStart);
          
          var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[key].name);
          $(".education-entry:last").append(formattedSchoolName)

          var formattedYears = HTMLschoolDates.replace("%data%", education.schools[key].years);
          $(".education-entry:last").append(formattedYears)

          var formattedSchoolLocal = HTMLschoolLocation.replace("%data%", education.schools[key].schoolCity)
          $(".education-entry:last").append(formattedSchoolLocal)

          var formattedQualification = HTMLschoolMajor.replace("%data%", education.schools[key].qualification);
          $(".education-entry:last").append(formattedQualification)
    
    }
};

education.displayEdu(); 

//display the internationalize button
$("#main").append(internationalizeButton)

//display a google map
$("mapDiv").append(googleMap)
