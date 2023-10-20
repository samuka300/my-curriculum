function js_add_rows() {
    var inputElement = document.getElementById('txtNumRows');
    var value = parseInt(inputElement.value);
  
    var table = document.getElementById('sampleTable');
  
    if (isNaN(value)) {
      alert('Só são aceitos valores numéricos.');
    } else if (value < 1 || value > 10) {
      alert('Os valores válidos estão entre 1 e 10.');
    } else {
      for (var i = 0; i < value; i++) {
        var newRow = table.insertRow(-1);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = 'Nova linha cell1';
        cell2.innerHTML = 'Nova linha cell2';
      }
    }
  }