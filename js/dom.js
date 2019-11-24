//Ugly Number Algorithm
function getUglyNumber(first, second) {

    var hasil = [];
    var primeFactor = [2, 3, 5];
    for (var k = first; k<=second; k++) {
    var factor = k ;
    // var ugly = false;
        for (var i=first; i<=k; i++) {
          for (var j=0; j<primeFactor.length; j++) {
            if (factor % primeFactor[j] === 0) {
              factor = factor / primeFactor[j];
            }
          }
        }
        // console.log(factor);
        if (factor === 1) {
          hasil.push(k);
        }
    }
      return hasil;
    }

    //reading html file
    var form = document.getElementById('inputForm');


    form.addEventListener('submit', process);

    //processing thrugh html input
    function process(e) {
        e.preventDefault();

        //get input value
        var first = document.getElementById('first').value;
        var second = document.getElementById('second').value;
        // console.log(first, second);

        if (first >= second) {
            return alert ("First number must smaller than second number!")
        } else {
            var hasil = getUglyNumber(first, second);
        }

        console.log(hasil);

        //creating new element for output
        var output = document.getElementById('output');
        output.innerHTML = `<h4>There are ${hasil.length} Ugly Numbers between ${first} and ${second}<h4>
                            <h5>These numbers are ${hasil} <h5>`;
    }