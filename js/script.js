async function onClick(e) {
    e.preventDefault();
    // get form values
    let url = document.getElementById('query').value;

    if (url === "") {
        return;
    }

    // call API
    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(JSON.stringify({
                status: response.status,
                text: response.statusText
            }));
        }
        let text = await response.json();
        updateResult(JSON.stringify(text));
    } catch (error) {
        updateResult(error.message);
    }
}

function updateResult(info) {
    document.getElementById('results').textContent = info;
}

document.getElementById('go').addEventListener('click', onClick);