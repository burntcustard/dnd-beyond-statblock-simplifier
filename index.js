// Remove elements with class 'ddb-homebrew-cant-publish' and any <ul> immediately after them
document.querySelectorAll('.ddb-homebrew-cant-publish + ul').forEach(ul => ul.remove());
document.querySelectorAll('.ddb-homebrew-cant-publish').forEach(el => el.remove());

// Remove 2nd and 4th columns from stat tables
document
  .querySelectorAll('.stat-table tr *:nth-child(2), .stat-table tr *:nth-child(4)')
  .forEach(cell => cell.remove());

// Remove tidbits and tidbit containers with specific labels
['Skills', 'Languages', 'CR'].forEach(label => {
  document.querySelectorAll('.mon-stat-block-2024__tidbit, .mon-stat-block-2024__tidbit-container').forEach(element => {
    const elementLabel = element.querySelector('.mon-stat-block-2024__tidbit-label');
    if (elementLabel?.textContent.trim() === label) {
      element.remove();
    }
  });
});

// Remove all description block headings
document
  .querySelectorAll('.mon-stat-block-2024__description-block-heading')
  .forEach(heading => heading.remove());

// Remove paragraphs containing "Spellcasting."
document.querySelectorAll('p').forEach(paragraph => {
  if (paragraph.textContent.includes('Spellcasting.')) {
    paragraph.remove();
  }
});

// Remove ',  Passive Perception <number>' and surrounding whitespace from tidbit data
document.querySelectorAll('.mon-stat-block-2024__tidbit-data').forEach(data => {
  data.innerHTML = data.innerHTML.replace(/,\s*Passive Perception \d+\s*/, '');
});
