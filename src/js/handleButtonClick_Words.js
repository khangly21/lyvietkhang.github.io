function handleButtonClick(event) {
    const buttonId = event.target.id; // Retrieve the ID of the clicked button
    // Do something with the buttonId (e.g., log it, pass it to another function, etc.)
    console.log("Button clicked:", buttonId);
    directToDefinition(buttonId);
}

function directToDefinition(buttonId){
    window.location.href= `word-Detail.html?id=${buttonId}`;
}

export default handleButtonClick;