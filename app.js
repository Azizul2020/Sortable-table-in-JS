var tableValue = [{
    name: 'Azizul',
    roll: 39
}, {
    name: 'Aminur',
    roll: 17
}, {
    name: 'Rakib',
    roll: 16
}, {
    name: 'Firoj',
    roll: 14
}, {
    name: 'Imran',
    roll: 21
}, {
    name: 'Ovik',
    roll: 22
}, {
    name: 'Masum',
    roll: 19
}, ];
var tableData = tableValue;
var submit = document.getElementById("submit");
submit.addEventListener('click', function() {
    var name2 = document.getElementById("name").value;
    var roll2 = document.getElementById("roll").value;
    tableData.push({
        name: name2,
        roll: roll2
    }, )
    load(tableData);
});
var search = document.getElementById('searchbox');
search.addEventListener('input', function() {
    var value = search.value.toUpperCase();
    tableData = show(tableValue, value);

    load(tableData);
})
var roll = true;

function sortRoll(col) {
    if (roll == true) {
        roll = false;
        btn.innerHTML = "ASC";
        tableData = tableData.sort(function(a, b) {
            return b[col] - a[col];
        })
    } else if (roll == false) {
        roll = true;
        btn.innerHTML = "DSC";
        tableData = tableData.sort(function(a, b) {
            return a[col] - b[col];
        })
    }
    load(tableData);
}

var name = 1;

function sortName(col) {
    if (name == 1) {
        name = 0;
        btn2.innerHTML = "ASC";
        tableData = tableData.sort(function(a, b) {
            if (a[col] > b[col]) {
                return -1;
            }
        })
    } else if (name == 0) {
        name = 1;
        btn2.innerHTML = "DSC";
        tableData = tableData.sort(function(a, b) {
            if (b[col] > a[col]) {
                return -1;
            }
        })
    }
    load(tableData);
}
load(tableData);

function load(record) {
    var body = document.getElementById("body");
    var data = '';
    for (a of record) {
        data += `
      <tr>
        <td>${a.name}</td>
        <td>${a.roll}</td>
      </tr>
     `;
    }
    body.innerHTML = data;
}

function show(c, data) {
    var table = [];
    for (i of c) {
        if (i.name.toUpperCase().includes(data) || i.roll.toString().includes(data)) {
            table.push(i);
        }
    }

    return table;
}