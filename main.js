const btn = document.getElementById('btn_add');
btn.addEventListener('click', event => {
    const new_tr = document.createElement("tr");
    const new_td = document.createElement("td");
    new_tr.innerHTML = "<td>row:3, cell:1</td><td>row:3, cell:2</td>";
})