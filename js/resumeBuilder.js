

// object containg personal information and contact details
var bio = {
    name: "Lucy Moore",
    role: "web developer",
    welcomeMsg: "Hello All! Welcome to my resume",
    skills: ["Java", "HTML5", "javaScript", "UML", "SQL", "CSS"],
    image: "image/Lucy.jpg",
    contact: { 
      "phone": "0272741511",
      "email": "lucyviolet.moore@gmail.com",
      "skype": "lucyviolet1",
      "location": "Wellington, New Zealand",
      "github": "LucyMoore",
      
            },
    
    function displayBio() {
        //name and role displayed on resume
        var formattedName = HTMLheaderName.replace("%data%","Lucy Moore")
        $("#header").prepend(formattedName)
        var formattedRole = HTMLheaderRole.replace("%data%","Web/Software Developer")
        $("#header").append(formattedRole)

              };
  };
displayBio();

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
           years: "2007 - 2008",
           schoolCity: "Wellington",
     qualification: "Diploma in Video Post Production",
  },
  {
           name: "Natcol Design Technology",
           years: "2007 - 2008",
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

 function to display work history to the pageon the resume
function displayWork(){
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
displayWork();


//display the internationalize button
$("#main").append(internationalizeButton)

//display a google map
$("mapDiv").append(googleMap)
