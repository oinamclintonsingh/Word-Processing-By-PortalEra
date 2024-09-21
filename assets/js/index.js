document.getElementById('processText').addEventListener('click', function() {
    let inputText = document.getElementById('userInput').value;
    let processedText = inputText.replace(/\s+/g, ' ').trim(); // Removes extra spaces
    document.getElementById('output').textContent = processedText;
});

document.getElementById('copyText').addEventListener('click', function() {
    const outputText = document.getElementById('output').textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert('Text copied to clipboard!');
    });
});
