
var bio = {
	"name": "Shanna M. Sullivan",
	"role": "Front-End Web Developer",
	"contacts": {
		"mobile": "925.984.1361",
		"email": "shanna.sullivan@gmail.com",
		"github": "github.com/acrobat130",
		"githubURL": "https://github.com/acrobat130",
		"location": "San Jose, CA"
	},
	"welcomeMsg": "Professionally, I am a designer at heart. I think in pictures. I am a passionate, goal-oriented person who is always looking for a challenge. I would love to work with you.",
	"skills": ["Adobe Creative Suite: Photoshop, InDesign, Illustrator, Acrobat", " JavaScript", " HTML", " CSS", " Visual Design", " UX Design", " AutoCAD", " Rhino", " SketchUp", " Revit", " Drafting", " Model Building", " Logic Express", " Final Cut Pro", " Pages", " Keynote", " Word", " Excel", " Powerpoint", " Windows and Mac platforms", " Acoustical testing and measurements", " Choreography"],
	"bioPic": "images/headshot.jpg"
}

function prependToHeader(what, how) {
	$("#header").prepend(how.replace("%data%", what));
}

function appendToResume(what, how, where) {
	$(where).append(how.replace("%data%", what));
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");

//appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
function displayLink() {
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github).replace("#", bio.contacts.githubURL);

	$("#topContacts").append(formattedGithub);
}

displayLink();

appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.bioPic, HTMLbioPic, "#header");
appendToResume(bio.welcomeMsg, HTMLwelcomeMsg, "#header");

function appendToFooter(what, how, where) {
	$("#footerContacts").append(how.replace("%data%", what));
}

appendToFooter(bio.contacts.mobile, HTMLmobile);
appendToFooter(bio.contacts.email, HTMLemail);
appendToFooter(bio.contacts.github, HTMLgithub);
appendToFooter(bio.contacts.location, HTMLlocation);

/*
$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills");
*/

//add name and role to header
/*
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);
*/


if(bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);
	appendToResume(bio.skills, HTMLskills, "#skills");
/*
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
*/
}



var work = {
	"jobs": [
	{
		"title": "Acoustical Consultant",
		"employer": "Charles M. Salter Associates",
		"employerURL": "http://www.cmsalter.com",
		"location": "San Francisco & San Jose, CA",
		"dates": "2012-present",
		"description": "I design room acoustics, sound isolation, and mechanical/electrical/plumbing noise and vibration in buildings. I conduct acoustical testing and measurements to quantify interior and exterior noise environments and to determine if acoustical design goals are met. I provide written reports with recommendations for all testing, measurements, and drawing/specification reviews. I manage up to 20 projects simultaneously and generate over $250,000 in revenue annually. Project types include recording studios, music buildings, corporate interiors, multi-family residential, office towers, luxury residences, fitness centers, retail spaces, restaurants, and mechanical enclsures. I interface directly with clients, including Gensler, Swinerton Builders, Google, and other architects, developers, contracters, and owners."
	},
	{
		"title": "Marketing Assistant",
		"employer": "Dahlin Group Architecture and Planning",
		"employerURL": "http://www.dahlingroup.com/",
		"location": "Pleasanton, CA",
		"dates": "2005-2007",
		"description": "I began as an intern and was promoted to marketing assistant with increased responsibilities. Those responsibilities included tasks relating to award submittals, color boards, project photography, large-scale scanning, database entry, and administrative duties." 
	},
	{
		"title": "Acrobatics Coach & Choreographer",
		"employer": "Central Coast Gymnastics",
		"employerURL": "http://www.iflipforccg.com/index.php",
		"location": "San Luis Obispo, CA",
		"dates": "2007-2012",
		"description": "I coached the acrobatic gymnastics team, recreational acrobatic gymnastics classes, dance classes, and choreographed competitive routines for members of the acrobatic gymnastics team, all while competing as a high-level acrobatic gymnast and obtaining an architecture degree at Cal Poly."
	}]
}

function displayWork() {
	for(job in work.jobs) {
	// create a new div for work experience
	$("#workExperience").append(HTMLworkStart);
	//concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].employerURL);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y)
	}
);

var education = {
	"schools": [
	{
		"name": "California Polytechnic State University",
		"location": "San Luis Obispo, CA",
		"degree": "Bachelor of Architecture",
		"major": "Architecture", 
		"minors": [" Architectural Engineering", " Music"],
		"dates": 2012,
		"url": "http://www.calpoly.edu"
	},
	{
		"name": "Stanford Continuing Education",
		"location": "Palo Alto, CA",
		"classes": "JavaScript",
		"dates": 2015,
		"url": "https://www.stanford.edu/"
	},
	{
		"name": "General Assembly",
		"location": "San Francisco, CA",
		"classes": "UX Design",
		"dates": 2015,
		"url": "https://generalassemb.ly/"
	}
	],
	"onlineEducation": [
		{
		"title": "Front-End Web Developer Nanodegree",
		"schoolURL": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001",
		"school": "Udacity",
		"dates": 2015,
		"courses": ["Intro to Computer Science", "Intro to HTML and CSS", "How to Use Git and GitHub","JavaScript Basics", "Intro to jQuery", "Object-Oriented JavaScript", "HTML5 Canvas", "Website Performance Optimization", "Browser Rendering Optimization", "Intro to AJAX", "JavaScript Design Patterns", "JavaScript Testing"],
		"urlTitle": "www.udacity.com",
		"url": "https://www.udacity.com"
	}
	]
}

function displayEducation() {
	for(school in education.schools) {
	// create a new div for work experience
		$("#education").append(HTMLschoolStart);
		//concat employer and title
		
		if(typeof education.schools[school].degree != "undefined") {

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
		
			$(".education-entry:last").append(formattedSchoolNameDegree);

		} else {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
			$(".education-entry:last").append(formattedSchoolName);
		}

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		
		if(typeof education.schools[school].major != "undefined") {

			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}

		if(typeof education.schools[school].minors != "undefined") {

			var formattedSchoolMinors = HTMLschoolMinors.replace("%data%", education.schools[school].minors);
			$(".education-entry:last").append(formattedSchoolMinors);
		}

		if(typeof education.schools[school].classes != "undefined") {

			var formattedSchoolClasses = HTMLschoolClasses.replace("%data%", education.schools[school].classes);
			$(".education-entry:last").append(formattedSchoolClasses);
		}
	}

	for(onlineCourse in education.onlineEducation) {
		$("#online-education").append(HTMLonlineEducation);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineEducation[onlineCourse].title).replace("#", education.onlineEducation[onlineCourse].schoolURL);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineEducation[onlineCourse].school);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

		$(".online-education-entry:last").append(formattedOnlineTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineEducation[onlineCourse].dates);
		$(".online-education-entry:last").append(formattedOnlineDates);

		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineEducation[onlineCourse].urlTitle).replace("#", education.onlineEducation[onlineCourse].url);
		$(".online-education-entry:last").append(formattedOnlineURL);
	}


}

displayEducation();

var projects = {
	"projects": [
	{
		"title": "Hanging Bench",
		"url": "http://www.shannamichelledesigns.com/work/hanging-bench/index.html",
		"dates": 2012,
		"description": "Studio Consilio's Hanging Bench project was designed and built in ten weeks, and is designed to catalyze social interaction in a space that was previously overlooked and underutilized. It is a versatile space designed for activities ranging from sleeping to socializing to holding class meetings. As its name suggests, this project hangs from the top of the concrete wall instead of being affixed to the wall, relying on a structural system of 2-inch and 3-inch angle iron. Big Creek Lumber Company donated the 1x4 and 2x4 redwood slats. Most of my efforts went into the development of the swing, which is not yet installed due to complications with the concrete support wall. The swing embodies the same character and functionality as the rest of the project with the added perk (and design challenge) of movement.",
		"images": [
			"images/StudioConsilioHangingBenchSm-1.jpg",
			"images/DSC03749.JPG",
			"images/StudioConsilioHangingBenchSm-5.jpg",
			"images/IMG_6717.JPG"
		]
	},
	{
		"title": "Tensegrity Table",
		"url": "http://www.shannamichelledesigns.com/work/tensegrity-table/index.html",
		"dates": 2011,
		"description": "The term 'tensegrity' comes from Buckminister Fuller and is short for tensional integrity. This concept is based on loading members in pure tension or compression so that as the load increases, no bending moment is placed on the structure. This table exhibits a triangular tabletop being supported by the simplest tensegrity structure. None of the three compression rods touch each other or the tabletop, and the table components are stabilized with fishing line. The top and bottom planes each form a triancle, and fishin line connects the top of each compression rod to the bottom of the next compression rod. Each loop of fishing line is swaged together with aliminum and can be adjusted or replaced as necessary.",
		"images": [
			"images/vellum-table-color-edited.jpg",
			"images/IMG_7519-edited.jpg",
			"images/IMG_7563-edited.jpg",
			"images/IMG_7526-edited-v2.jpg"
		]
	},
	{
		"title": "F-stop",
		"url": "http://www.shannamichelledesigns.com/work/f-stop/index.html",
		"dates": 2010,
		"description": "The design and fabrication of F-stop relied heavily on digital tools like Rhino, laser-cutters, and CNC routers. One of the challenges was to create a design that incorporated good craft into our use of digital tools; the exposed joints are one of the ways we addressed that issue. We designed and built every aspect of this unusual interior space by developing expertise in many different areas, including parametric design, lightina and electrical, upholstery, and furniture design. A maple veneer plywood is the primary material. F-stop was designed to support student activities like holding club meetings, displaying projects, selling coffee, studying, and socializing. My role was to lead the design and fabrication of the kitchenette, which featured complex moving parts like a roll-out cart and a hinged, L-shaped door. I had to ensure that the kitchenette was as beautiful as it was functional.",
		"images": [
			"images/fstop-2.jpg",
			"images/IMG_4497.JPG",
			"images/IMG_4424.JPG",
			"images/IMG_4453.JPG"
		]
	}
	]
}

projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	
	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedProjectImage);
		}
	}
	
	}
}

projects.display();


//create international resume versions
function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] +" "+ name[1];
}
 var name = $("#name").text();

 $("#main").append(internationalizeButton);

//map
$("#mapDiv").append(googleMap);






