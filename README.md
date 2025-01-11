# cs628-pe-YEN
**Input**: using React famework to create a new React application named "client"  with a standard directory structure and all necessary configurations. After running this command, we'll have a new directory with a complete React development environment ready to use.
**Process**:Now to create the content as well as design it we gonna create 2 file. One for the content (Resume.js) and one for design of the content (Resume.css).
Resume.js:
  This file is a React component that defines the structure of the resume.
  It uses JSX to render HTML-like elements such as headings, sections, and lists to display personal details, education, and projects.
  The className attributes link the elements to styles defined in the CSS file.
  For example, the <header> tag with class "header" displays the student's name and contact information, while <section> tags organize the education and project sections.
  The projects section includes clickable links that direct to source code repositories.
Resume.css:
  This file styles the elements in Resume.js to improve visual presentation.
  For instance, the .resume class sets the layout (e.g., font, color, padding), and .header aligns the header text to the center.
  Additional classes like .projects a provide interactivity, such as link hover effects
To run the project I gonna use App.js and run the project with a development server which is npm start
**Output**: then I will have a web with the detail content and it's design that I set.
