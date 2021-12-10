// Skills Icons
import htmlIcon from "./images/skills/html.svg"
import cssIcon from "./images/skills/css.svg"
import reactIcon from "./images/skills/react.svg"
import jsIcon from "./images/skills/javascript.svg"
import cppIcon from "./images/skills/cpp.png"
import cSharpIcon from "./images/skills/c-sharp.png"
import androidIcon from "./images/skills/android.png"
import javaIcon from "./images/skills/java.png"
import nodejsIcon from "./images/skills/node-js.png"
import vuejsIcon from "./images/skills/vue-js.png"

// Social Icon
import githubIcon from "./images/skills/github.svg"
import avatar from "./images/avatar.jpg"

//Logo
import logoImg from "./images/logo.png";
import logoSmallImg from "./images/logo-small.png";
import resumeImg from './images/about/resume.png';

//About Icons
import aboutCodingIcon from "./images/about/coding.png";
import aboutAndroidIcon from "./images/about/android.png";
import aboutClubIcon from "./images/about/pantone.png";
import aboutMathIcon from "./images/about/data.png";
import aboutHarvardIcon from "./images/about/app-development.png";
import meIcon from "./images/about/man.png";
import mscIcon from "./images/about/microsoft.png";
import certikIcon from "./images/about/data-analysis.png";
import alibabaIcon from "./images/about/web-development.png";

export default {

  //Languages
  languages: [
      "cn",
      "en"
  ],
  //Logo
  logos:{
      logo:logoImg,
      logoSmall: logoSmallImg,
  },
  //   Header Details ---------------------
  headerTagline: [
    //Line 1 For Header
    "Tianren Tan",
  ],
  //   Header Paragraph
  headerParagraph:
    "Current Master's Student in Software Engineering at UC Irvine",

  //Contact Email
  contactEmail: "jason.tianrent@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Project One", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Two", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "http://chetanverma.com/",
    },

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
  resumeLogo: resumeImg,
  codingLogo: aboutCodingIcon,
  meLogo: meIcon,
  aboutParaOne: "Hi there! I'm Tianren Tan, you can call me Jason.",
  aboutParaTwo:
    "I’m currently a grad student at UC Irvine majoring in Software Engineering. I received my Bachelors degree in SWE at Wuhan University, China. I’ve always had a strong passion in building stuff since a child, and I’ve always been fascinated by the countless possibilities we can realize with computers. I’m highly motivated with my work and receptive to new ideas. ",
  aboutParaThree:
    "I have prior experience in Java, JS, React, Vue and many more. My goal is to become a full-stack engineer, right now I’m actively seeking summer internships and fulltime position.",
  aboutImage: avatar,
  timelines: [
    {time: '2010', title: 'Start coding at age 12', description: 'Beginning with C++ using Visual C++ 6.0', badges:['C++']},
    {time: '2013.01', title: 'Multi-user Group Chat', description: 'Individually developed a TCP C/S framework multi-user group chat app, supporting rich text format and file transfer', badges:['Java','TCP/IP']},
    {time: '2014.11', title: 'NOIP2015 Second Prize', description: 'Senior Group, ranked #82 in Beijing', badges:['C++', 'Algorithms']},
    {time: '2015.06 - 2015.07', title: 'ID Tech Summer Camp', description: 'At UC Irvine, developed a turned-based RPG battle game', badges:['Java', 'OOP', 'Algortihms']},
    {time: '2016.09', title: 'Microsoft Student Club (MSC)', description: 'Joined MSC in Wuhan University', badges:['Microsoft', 'Tech'], icon: aboutClubIcon},
    {time: '2016.11', title: 'First Hackathon in MSC', description: 'Developed a bullet-chat based screen reminder. Leaded a small team of three and won first prize.', badges:['Teamwork', 'Java', 'Desktop Development']},
    {time: '2017.07 - 2017.12', title: 'Online Coupon Exchange Platform', description:'An online peer-to-peer coupon exchange platform, won \'Best Mobile App Design\' and Third prize for the 13th Citi Cup Financial Application Development Contest.', badges:['Android', 'RxAndroid', 'OkHttp', 'Retrofit', 'ButterKnife','Financial Development'], icon: aboutAndroidIcon},
    {time: '2018.01 - 2018.02', title: 'Honorable Mention in MCM/ICM', description: 'developing a prediction model of global population distribution for the next 50 years', badges:['Teamwork', 'Matlab', 'Modeling', 'LateX'], icon: aboutMathIcon},
    {time: '2018.07 - 2018.08', title: 'Harvard Summer School', description: 'CSCI S-73 Developing Cross-Platform Mobile Apps with Xamarin. Developed a cross-platform mobile application MBTAManager, providing travelling information, alerts and schedule optimizations in Boston. Received high compliments from Miguel De Icaza, a well known SDE I\'ve always admired.', badges:['C#', 'Xamarin', 'Cross-Platform Development'], icon: aboutHarvardIcon},
    {time: '2018.09 - 2019.06', title: 'MSC Vice President of Technology', description: 'Organized Tech-Salons for knowledge sharing. Also organizing and supervising school-wide Hackathon. Provided technical support for software development/optimization.', badges: ['Leadership', 'Tech', 'Communication'], icon: mscIcon},
    {time: '2019.06 - 2019.08', title: 'Frontend Internship at CertiK', description: 'Developed a Google Chrome plug-in for peer point testing in the CertiK Testnet using JavaScript and CSS. Developed and restructured company webpage using React, deployed with Gatsby and Netlify.', badges: ['JS', 'React', 'Chrome', 'CSS', 'WebDev'], icon: certikIcon},
    {time: '2020.09 - 2020.11', title: 'Software Development Co-op at Alibaba', description: 'Individually designed and realized frontend and backend of a data analysis subpage. Implemented Koa.js for data retrieval to apply a light-weighted but high efficent design.', badges: ['JS', 'Node.js', 'Vue.js', 'Koa.js'], icon: alibabaIcon}
  ],
  

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
        "CSS3",
    },
    {
      img: jsIcon,
      para:
        "JavaScript",
    },
    {
      img: reactIcon,
      para:
        "React",
    },
    {
        img: javaIcon,
        para:
            "Java",
    },
    {
        img: nodejsIcon,
        para:
            "Node.js",
    },
    {
        img: cppIcon,
        para:
            "C++",
    },
    {
        img: cSharpIcon,
        para:
            "C#",
    },
    {
        img: vuejsIcon,
        para:
            "Vue.js",
    },
    {
        img: androidIcon,
        para:
            "Android"
    }
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/Jason-TianrenTan" }
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
