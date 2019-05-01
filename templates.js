hamburger = 
`
<div class="hamburger">
  <div class="burger-line"></div>
  <div class="burger-line"></div>
  
</div>
`

const navTab = 
`<div class="tabCover">
<div class="navTab">
<div class="burger-line"></div>
<div class="burger-line"></div>

</div>
<span class="navTabLabel">Menu</span>
</div>
`

const nav = 
`
<div class="navDiv outOfSight">
  <nav class="navMenu ">
    <a class="navLink a1">About</a>
    <a class="navLink a2">Projects</a>
    <a class="navLink a3">Resume</a>
    <a class="navLink a4">Contact</a>
  </nav>
</div>

`



const nameBanner = 
`
<div  class="nameWrapper">
  <h1 class="name">
    Tim<span class="nameLength">othy</span> <span class="nameLengthLast">Vlasuk</span> <span class="nameToggleLast">Vlasuk</span> <span class="nameToggleInitial">V</span>
  </h1>
</div>
`

const aboutMe = 
`
<div class="wrapper">
  <div class="bio">
    <div>
      <h1>I'm Tim</h1>
      <h2>A Portland based developer.</h2>
      <h2>1.44 MegaBytes of twisted steel and tech appeal.</h2>
    </div>
    
    
    <div>
    <h3></h3>
    <h3></h3>
    </div>
    
  </div>

</div>
`

const resume = 
`
<div class="wrapper resumeWrapper">
  <div class="resume-side-wrapper">
   <div class="resume-left box">

    <div class="id-info box">
      <p>Tim Vlasuk</p>
      <p>Portland, OR</p>
      <p>(360) 306-2117</p>
      <p>timvlasuk@gmail.com</p>
    </div>
    <h2></h2>



    <div class="work-history box">
      <p>
        <h2>EXPERIENCE</h2>
        <div class="experience box">
          <h3>Nielsen Brothers Inc.</h3><p>Sedro-Woolley, Wa — Shop Tech</p>
          <p>April 2014 - End of Dec 2017</p>
          <p>Floating role:</p>
          <ul>
            <li>Maintained heavy equipment/Light repairs</li>
            <li>Able to be taught, self-learn, teach</li>
            <li>Servicing, troubleshooting hydraulic leaks, electrical repairs</li>
          </ul>
        </div>
        <div class="experience box">
          <h3>F/V Endeavor</h3><p>Bristol Bay — Deckhand</p>
          <p>2016, 2017, 2018</p>
          <ul>
            <li>Fast-paced; Required adept communication, fluid focus</li>
            <li>Boat, machinery, fishing gear: troubleshoot/upkeep</li>
            <li>Small strong community environment</li>
          </ul>
        </div>
        <div class="experience box">
          <h3>F/V Auriga</h3><p>Bering Sea — Deckhand</p>
          <p>June - September 2013</p>
          <ul>
            <li>Learned and familiarized through shipyard repair</li>
            <li>Pick up skills on the fly</li>
            <li>Tracking, managing,maintaining boat machinery</li>
            <li>8 Person company/team with interdependent work/living roles</li>
          </ul>
        </div>
    

      </p>
    </div>

   </div>

   <div class="resume-right box">
   
    <div class="education box">
      <h2>EDUCATION</h2>
      <h3>Thinkful Bootcamp, Remote - Portland, Or</h3>
        <p>FullStack-Flex course - Oct 2018 - Present</p>

      <div>
        <p>
          Onboarding basic web dev, backend building and integration, frontend    framework, testing, continuous integration, good practices.
        </p>
      </div>
      <div>
        <p>
          Swiftly bring on new tools and utilize in self-inspired projects
        </p>
      </div>
      <div>
        <p>
          Swiftly bring on new tools and utilize in self-inspired projects
        </p>
      </div>

    </div>

    <div class="box">
      <h2 class="github-link">GITHUB</h2>
      <a class="github" href="https://github.com/Vlacross">Check out some of my projects</a>
    </div>

    <div class="tools box">
          <ul class="tools-list">
          <h2>CURRENT TOOLS</h2>
            <li><p>GIT</p></li>
            <li><p>Unix-Terminal</p></li>
            <li><p>Javascript</p></li>
            <li><p>MongooseJS</p></li>
            <li><p>ExpressJS</p></li>
            <li><p>JQuery</p></li>
            <li><p>Mocha/Chai</p></li>
            <li><p>HTML/CSS</p></li>
            <li><p>React-Redux</p></li>
            <li><p>Enzyme</p></li>
            <li><p>Travis CI</p></li>
          </ul>
        </div>

   </div>
  </div>

</div>
`

{/* <p></p>
<div></div> */}

const contact = 
`
<div class="wrapper">
  <div class="contact-list">
    <ul class="contact-list">

      <li class="listingCard githubCard">
        <a class="github" href="https://github.com/Vlacross">Github</a>
      </li>

      <li class="listingCard linkdInCard">
        <a class="linkdIn" href="https://www.linkedin.com/in/timothy-vlasuk-76709916b/">LinkIn</a>
      </li>

      <li class="listingCard emailCard">
         <span class="email">timvlasuk@gmail.com</span>
      </li>

    </ul>
  </div>

</div>
`

const projects = 
`
<div class="wrapper projectsWrapper">
  <div class="projects-list">
    <ul class="projects-list">

      <li class="box projectCard">
        <div>
          <h2>MTB-trail-finder</h2>
          <h3>(JQuery, Javascript)</h3>
        </div>
        
        <div class="linksDiv">
          <a class="link" href="https://github.com/Vlacross/mtb-trail-api">Code</a>
          <a class="link" href="https://vlacross.github.io/">Live</a>
        </div>
      </li>

      <li class="box projectCard">
        <div>
          <h2>RSVP-event coordination platform</h2>
          <h3>(Javascript, Jquery, Express, MongooseJS, mocha/chai)</h3>
        </div>
        
       
        <div class="linksDiv">
          <a class="link" href="https://github.com/Vlacross/RSVP">Code</a>
          <a class="link" href="https://rsvp-no-regrets.herokuapp.com/">Live</a>
        </div>
      </li>

      <li class="box projectCard">
       <div>
        <h2>Title - graphics</h2>
        <h3>(HTML, CSS)</h3>
       </div>

        <div class="linksDiv">
         <a class="link" href="https://github.com/Vlacross/Port-practice">Code</a>
         <a class="link" href="https://vlacross.github.io/Port-practice/">Live</a>
        </div>
        
      </li>

    </ul>
  </div>

</div>
`


/*<a class="" href="">Live</a>
        <span class=""></span> */

