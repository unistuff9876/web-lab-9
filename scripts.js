let equals_pressed = false;
document.addEventListener('DOMContentLoaded', function () {
    //digit buttons
    document.querySelectorAll("button[id *='buttonnum']").forEach(element => {
        element.addEventListener('click', function (element) {
            if (equals_pressed) {
                document.querySelector('input').value = "";
                document.querySelector('#gray-input').textContent = "";
                equals_pressed = false;
            }
            if (isNaN(parseFloat(document.querySelector('input').value.slice(-1))) === true 
				&& document.querySelector('input').value.slice(-1) !== '.') 
			{
                document.querySelector('#gray-input').textContent = "";
            }
            document.querySelector('input').value += element.target.textContent;
            document.querySelector('#gray-input').textContent += element.target.textContent;
        })
    });

    //clear button
    document.querySelector('#buttonclear').addEventListener('click', function () {
        document.querySelector('input').value = "";
        document.querySelector('#gray-input').textContent = "";
    })

    //backspace button
    document.querySelector('#buttonbackspace').addEventListener('click', function () {
        document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
        document.querySelector('#gray-input').textContent = document.querySelector('#gray-input').textContent.slice(0, -1);
    })

    //+-*/ operators
    document.querySelectorAll('.buttonop').forEach(element => {
        element.addEventListener('click', function (element) {
            if (equals_pressed) {
                equals_pressed = false;
            }
            if (document.querySelector('input').value.length !== 0) {
                if (isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 1) {
                    document.querySelector('input').value = document.querySelector('input').value.slice(0, -1);
                    document.querySelector('#gray-input').textContent = document.querySelector('#gray-input').textContent.slice(0, -1);
                }
                document.querySelector('#gray-input').textContent += element.target.textContent;
                document.querySelector('input').value += element.target.textContent;
            }
        });
    })

    //fraction period button
    document.querySelector('#buttonperiod').addEventListener('click', function () {
        if (document.querySelector('input').value.slice(-1) !== '.') {
            document.querySelector('input').value += '.';
            document.querySelector('#gray-input').textContent += '.'
        }
    })

    //doing the calcs
    document.querySelector('#buttonequal').addEventListener('click', function () {
        if (isNaN(parseFloat(document.querySelector('input').value.slice(-1))) == 0) {
            document.querySelector('input').value = eval(document.querySelector('input').value);
            document.querySelector('#gray-input').textContent = document.querySelector('input').value;
            equals_pressed = true
        }

    })
})
