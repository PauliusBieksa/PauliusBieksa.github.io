let card_contents = JSON.parse(data);

// Add tags to title section
let title_container = document.getElementsByClassName('article_title')[0];
let title_element = document.getElementById('page_title');
let title = title_element.textContent;
for (single of card_contents)
{
	console.log(single['title']);
	console.log(title);
	if (single['title'] == title)
	{
		for (tag in single['tags'])
		{
			console.log('if');
			let tag_element = document.createElement("span");
			tag_element.textContent = single['tags'][tag];
			tag_element.classList.add('tag');
			let p = document.getElementById('date_stamp');
			title_container.insertBefore(tag_element, p);
			//title_container.appendChild(tag_element);
		}
		break;
	}
}
