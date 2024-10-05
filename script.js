let inputText = document.getElementById("input");
let characterCount = document.getElementById("charCount");
let wordCount = document.getElementById("wordCount");
let paragraphCount = document.getElementById("paragraphCount");
let sentenceCount = document.getElementById("sentenceCount");

inputText.addEventListener("input", function() {
    let text = inputText.value;
    characterCount.textContent = text.length;
    let words = text.trim().split(/\s+/).filter((word) => word.length > 0);
    wordCount.textContent = words.length;
    let sentences = text.split(/[.!?]\s*/).filter((sentence) => sentence.length > 0);
    sentenceCount.textContent = sentences.length;
    let paragraphs = text.split(/\n+/).filter((paragraph) => paragraph.trim().length > 0);
    paragraphCount.textContent = paragraphs.length;
});
