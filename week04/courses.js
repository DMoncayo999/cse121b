// courses.js
// Define the course object with course code, name, and sections
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
      { sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T' },
      { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A' }
    ]
  };
  
  // Function to set course name and number in HTML
  function setCourseInfo(course) {
    document.getElementById('courseName').textContent = course.name;
    document.getElementById('courseCode').textContent = course.code;
  }
  
  // Function to output sections into the table
  function renderSections(sections) {
    const tableBody = document.getElementById('sections');
    tableBody.innerHTML = ''; // Clear existing rows
    
    sections.forEach(function (section) {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${section.sectionNum}</td>
        <td>${section.roomNum}</td>
        <td>${section.enrolled}</td>
        <td>${section.days}</td>
        <td>${section.instructor}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  // Call the functions to set course info and render sections
  setCourseInfo(aCourse);
  renderSections(aCourse.sections);