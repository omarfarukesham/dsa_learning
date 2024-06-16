
function debounce(fun, wait){
    let timeout;
    return function(...args){
        clearTimeout(timeout);
        timeout = setTimeout(()=> fun.apply(this, args), wait)
    }
}

function handleChange(event){
    console.log(event.target.value)
}

const inputText = document.getElementById('inputName')

const debounceHandleChange = debounce(handleChange, 200)

inputText.addEventListener('input', debounceHandleChange)
