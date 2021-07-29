// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import linkedInIcon from "./images/linkedIn.svg"

// About image
import aboutImage from "./images/aboutImage.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Nicole",
  headerTagline: [
    //Line 1 For Header
    "Software Engineer,",
    //Line 2 For Header
    "Certified ScrumMaster,",
    //Line 3 For Header
    "and Creative",
  ],
  //   Header Paragraph
  headerParagraph: "I am a Full Stack Software Engineer,  a passion for agile, user exper experience and helping people realize the value tech can add to their lives",

  //Contact Email
  contactEmail: "nicolesurawski@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Sour Grapes", //Project Title - Add Your Project Title Here
        para: "A digital wine cellar for wine lovers! Review and keep track of tasting notes and never forget a wine you loved again!", // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc: "https://images.unsplash.com/photo-1617957689233-207e3cd3c610?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
        //Project URL - Add Your Project Url Here
        url: "https://nsurawski.github.io/Sour-Grapes-Client/#/",
    },
    {
      title: "Listy", //Project Title - Add Your Project Title Here
        para: "A full stack application for productivity where users can create lists and check off list items as they are completed.", // Add Your Service Type Here
        //Project Image - Add Your Project Image Here
        imageSrc: "https://images.unsplash.com/photo-1557683316-973673baf926?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80",
        //Project URL - Add Your Project Url Here
        url: "https://nsurawski.github.io/list-app-client/#/",
    },
    {
      title: "Code-laborate", //Project Title - Add Your Project Title Here
      para: "Team Project: A forum that allows software engineering students share their code and solve problems as a team!", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://super-props.github.io/code-laborate-front-end/#/",
    },
    {
      title: "Shoe Library", //Project Title - Add Your Project Title Here
      para: "My very first full stack web app: A library where users can log their shoe collection", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://nsurawski.github.io/shoe-database-client/",
    },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  aboutParaTwo:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  aboutParaThree:
    "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage:
    aboutImage,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      para:
      "HTML5",
    },
    {
      img: cssIcon,
      para:
        "CSS3, Bootstrap & Sass",
    },
    {
      img: jsIcon,
      para:
        "JavaScript & jQuery",
    },
    {
      img: reactIcon,
      para:
        "ReactJS",
    },
    {
      img: designIcon,
      para:
        "User Experience & Information Arctitecture",
    },
    {
      img: codeIcon,
      para:
        "Python, Express.js, Node.js, RESTful APIs, Mongoose & MongoDB, Django, SQL & PostgreSQL,",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon,
      url: "https:github.com/NSurawski" ,
    },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/nicole-surawski/",
    },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/nicole_surawski",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
