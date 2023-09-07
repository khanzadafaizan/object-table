

const students = [
    { name: "Awais Khan", fatherName: "Ashraf Khan", rollNumber: 1, result: "Pass" },
    { name: "Faizan Khan", fatherName: "Shahid Khan", rollNumber: 2, result: "Pass" },
    { name: "Shahzad", fatherName: "Khan", rollNumber: 3, result: "Pass" },
    { name: "Muneeb", fatherName: "Aftab", rollNumber: 4, result: "Pass" },
    { name: "Abdul", fatherName: "Bilal", rollNumber: 5, result: "Pass" },
    { name: "Mansoor", fatherName: "Rehman", rollNumber: 6, result: "Pass" },
    { name: "Nabeel", fatherName: "Aqeel", rollNumber: 7, result: "Pass" },
    { name: "Adeel", fatherName: "Aqeel", rollNumber: 8, result: "Pass" },
    { name: "Daniyal", fatherName: "Aftab", rollNumber: 9, result: "Pass" },
    { name: "Haris", fatherName: "Akhtar", rollNumber: 10, result: "Pass" }];

    const tableContainer = document.getElementById('students-table');
const table = document.createElement('table');
table.className = 'table table-striped'
tableContainer.append(table);


for (let i = 0; i < students.length; i++) {
if(i === 0) {
const thead = document.createElement('thead');
const tr = document.createElement('tr');

for(let key in students[i]) {
const th = document.createElement('th');
th.innerText = key.toUpperCase();
tr.append(th);
}

thead.append(tr);
table.append(thead)
}
}

const tbody = document.createElement('tbody');
table.append(tbody);

for(let i = 0; i < students.length; i++) {
const tr = document.createElement('tr');
for(let key in students[i]) {
const td = document.createElement('td');
td.innerText = students[i][key]
tr.append(td);
}
tbody.append(tr);
}


