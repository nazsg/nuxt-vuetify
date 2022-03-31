<template>
  <div id="">
    <div id="header">
      Nazie SHARID
      <!-- <span id="contact"><a href="/noRobots">&#9993;</a></span> -->
    </div>

    <div class="cv">
      <div class="personal">
        <app-personal></app-personal>
      </div>
      <!-- <main> -->
      <div id="left">
        <div id="employment">
          <div id="volunteer">
            <h4>Volunteer</h4>
            <h5>Age UK, Herne Bay</h5>
            <ul class="jobTitle">
              <li>2017 Sept - present</li>
            </ul>
            <div class="sect">
              <p class="role">Computer Trainer</p>
              <ul>
                <li>Teach clients how to use a computer, tablet, smartphone</li>
                <li>Create email accounts</li>
                <li>Setup email accounts on various devices</li>
                <li>Install apps</li>
              </ul>
            </div>

            <div class="sect">
              <p class="role">Website Administrator</p>
              <ul class="jobTitle">
                <li>Main Achievements</li>
              </ul>
              <ul>
                <li>
                  Recreated contents to conform to new server requirements
                </li>
                <li>
                  Migrated website from old to new server using Content
                  Management System (Episerver CMS)
                </li>
              </ul>
            </div>
          </div>
          <div id="plumbing">
            <h4>Employment</h4>
            <h5>Plumbing Bits 4 U</h5>
            <ul class="jobTitle">
              <li>IT Support Engineer</li>
              <li>2008 Sep – 2016 Jun</li>
            </ul>

            <ul>
              <li>
                Coordinated IT requirements, website and online shop
                maintenance.
              </li>
              <li>Troubleshoot, diagnose and resolve IT issues</li>
              <!-- <li>Website maintenance; company website, and online shop</li>
                <li>
                  Troubleshoot, diagnose and resolve IT issues
                </li> -->
            </ul>
            <p>Main Achievements</p>
            <ul>
              <li>
                Internal online ordering system using PHP/MySql from scratch
                (different from online shop above)
              </li>
              <li>
                A5 size price booklet and A3 size price sheets using Adobe
                InDesign
              </li>
              <li>
                Office move - organized telephone and broadband installation,
                created vinyl signs for new premise using CorelDRAW and Roland
                Plotter.
              </li>
              <li>Life-size shower cubicle picture for shop display.</li>
            </ul>
          </div>
          <div id="yew">
            <h5>Yew Lee Plastic Mould Pte Ltd (Singapore)</h5>
            <ul class="jobTitle">
              <li>2003 Jul - 2008 Aug</li>
              <li>Marketing/Administrative Assistant</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="right">
        <div id="education">
          <h4>The OPEN University</h4>
          <p>
            HND in Computing and IT achieved, studying towards BSc (Hons)
            commenced in Oct 2014, finishing in Sep 2018
          </p>
          <ul>
            <li>Web, Mobile and Cloud Technologies - Distinction</li>
            <li>Interaction Design and the User Experience</li>
            <li>Software Engineering</li>
            <li>Object-oriented Java Programming</li>
            <li>Cisco networking</li>
            <li>Web technologies</li>
          </ul>
          <div id="canterbury" class="college">
            <p>Canterbury College (Awarded June 2009)</p>
            <p>Edexcel Level 2 BTEC First Diploma for ICT Practitioners</p>
            <!-- Achieved Overall Distinction Star at  -->
          </div>
          <div id="dunearn" class="college">
            <p>GCSE Dunearn Secondary School (Singapore)</p>
            <p>English (C), Maths (B)</p>
          </div>
        </div>
        <div id="cert">
          <h4>Certification</h4>
          <div id="logo" alt="CCNA logo" title="CCNA logo"></div>
          <h5>Cisco CCNA</h5>
          <p>Awarded Sept 2016</p>
          <p>
            Syllabus: <br />DHCP, EIGRP, FHRP, GRE, IPv4 And IPv6 Addressing,
            LAN Switching, Network Management Network Programmability, Network
            Security, Network Topologies, OSPF, PPPoE, QoS, RIPv2, Static And
            Dynamic Routing, Troubleshooting, WAN Topologies, eBGP
          </p>
        </div>
        <div id="skills">
          <h4>Skills</h4>
          <!-- <p>Git, Unix Bash Scripting, Python, Web protocols (http, ftp, ssl, error status codes)</p> -->
          <h5>Web</h5>
          <h6>Front-end</h6>
          <p>
            HTML, mobile-first responsive CSS including Sass and LESS, Bootstrap
            CSS Framework, Semantic UI Framework, JavaScript including ES6,
            NuxtJS (VueJS) JavaScript framework, jQuery
          </p>
          <h6>Back-end</h6>
          <p>PHP and MySQL Database, Node JS and Mongo DB</p>
          <h6>Others</h6>
          <p>
            Linux Bash Scripting, Full-stack with SSL integration on Nginx,
            VirtualBox
          </p>
        </div>

        <div id="projects">
          <h4>Projects</h4>
          <ul>
            <li><a href="http://nazs.net/sample">nazs.net/order-taking</a></li>
            <li><a href="http://nazs.net/holiday">nazs.net/holiday</a></li>
            <li><a href="http://panteli.biz">panteli.biz</a></li>
            <li>
              <a href="http://oskarsbarbers4men.co.uk"
                >oskarsbarbers4men.co.uk</a
              >
            </li>
            <li>
              <a href="http://bangkokpavilion.co.uk">bangkokpavilion.co.uk</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- </main> -->
      <!-- <div id="more">
        <div id="Tm352">
          <h6>Module: Web, Mobile and Cloud Technologies</h6>
          This module deepened my knowledge in some of the web technologies that I self-taught over the years. Being familiar with the topic not only made it more interesting to study the module but also highlighted some of HTTPS fundamental which I didn’t pick up before. TheRESTful web services</div>

      </div> -->
    </div>
  </div>
</template>
<script>
// import personal from './personal'
export default {
  components: {
    // 'app-personal': personal
  },
  name: "",
  data: () => ({}),
};
</script>
<style lang="scss" scoped>
* {
  letter-spacing: 1px;
}
h4,
h5,
h6 {
  transition: 2s;
}

a {
  text-decoration: none;
}
#contact {
  float: right;
  a {
    text-decoration: none;
    &hover {
      color: red;
    }
  }
}
#header {
  background-color: #ebe7e7;
  padding: 10px 0;
  font-size: 2em;
  letter-spacing: 5px;
  text-align: center;
  color: #666;
}
#cert,
#skills,
#education,
#employment,
#volunteer {
  border-bottom: 1px solid #acabaa;
  margin-bottom: 15px;
}
ul li a {
  display: block;
  padding: 0;
}
// .mob {
//   @media only screen and (max-width: 799px) {
//     display: block;
//     margin: 0;
//     transition: 3s;
//   }
//   @media only screen and (min-width: 800px) {
//     display: none;
//     transition: 3s;
//   }
// }
// .desk {
//   @media only screen and (max-width: 799px) {
//     display: none;
//   }
//   @media only screen and (min-width: 800px) {
//     display: block;
//     transition: 2s;
//   }
// }

ul {
  display: block;
}
.college {
  margin: 30px 0 0;
  // border: 1px solid #ddd;

  :first-child {
    font-weight: bold;
  }
}
main {
  padding: 20px;
  background-color: rgb(210, 227, 252);
}
#more {
  border-top: 100px solid #ccc;
  padding: 40px 20px 20px;
  background-color: rgb(210, 227, 252);
}
// @media only screen and (min-width: 800px) {
//   main {
//       display: flex;
//       width: 800px;
//       margin: 0 auto;
//       transition:  .9s;
//
//     #left, #right {
//       flex-basis: 50%;
//       padding: 0 10px;
//       transition: flex-basis .9s;
//     }
//     #right {
//       border-left: 1px solid #acabaa;
//     }
//   }
//   #header, #more {
//     width: 800px;
//     margin: 0 auto;
//     transition: .9s;
//   }
// }
// @media only screen and (min-width: 960px) {
//   main, #header, #more {
//     width: 960px;
//   }
// }
.cv {
  background-color: #adc9f2;
  width: 100%;
  margin: 0 auto;
  transition: 2s;
}
.cv:after {
  content: "";
  display: block;
  clear: both;
}
.personal {
  border-bottom: 1px solid #acabaa;
  transition: 2s;
  background-color: #ddd;
}
.personal,
#right,
#left {
  padding: 10px;
}
@media only screen and (min-width: 800px) {
  .cv,
  #header {
    width: 800px;
    margin: 0 auto;
    transition: 2s;
  }
  .personal,
  #right,
  #left {
    width: 50%;
    // border: 1px solid #ddd;
    transition: 2s;
  }
  .personal {
    border-bottom: 5px solid #acabaa;
    background-color: inherit;
  }
  #left {
    float: left;
  }
  #right {
    // background-color: green;
  }
  #right,
  .personal {
    float: right;
    border-left: 1px solid #acabaa;
  }
}
@media only screen and (min-width: 900px) {
  .cv,
  #header {
    width: 900px;
    transition: 2s;
  }
}
#cert #logo {
  background: url("/static/cisco_ccna.png") no-repeat right top;
  // background: #ddd url("https://acclaim-production-app.s3.amazonaws.com/images/a31c0301-ff96-4cee-9435-0a4b40ce6e66/cisco_ccna_R_26S.png") no-repeat right top;
  width: 150px;
  height: 150px;
  // background-color: red;
  position: relative;
  float: right;
  // outline: solid blue;
}
.jobTitle {
  list-style-type: none;
  margin: 0;
  padding: 0 0 10px 0;
}
#volunteer .sect {
  margin: 20px 0;
}
.role {
  font-weight: bold;
}
</style>
