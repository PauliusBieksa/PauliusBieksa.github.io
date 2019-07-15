let card_contents = JSON.parse(data);
let all_cards = [];
let all_tags = new Set();
let selected_tags = new Set();

// Generate all cards
for(single in card_contents)
{		
	// Add collumn layout
	let col = document.createElement('div');
	col.classList.add('col', 's12', 'm6');
	all_cards.push(col);
	
	// Add card to layout
	let a = document.createElement('a');
	a.setAttribute('href', card_contents[single]['url']);
	col.appendChild(a);
	
	let card = document.createElement('div');
	card.classList.add("card");
	a.appendChild(card);
	
	// Add image to card
	let img_container = document.createElement('div');
	img_container.classList.add("card-image");
	card.appendChild(img_container);
	
	let img = document.createElement('img');
	img.setAttribute('src', card_contents[single]['image_path']);
	img_container.appendChild(img);
	
	// Add tags to card and capture uniques
	let tag_container = document.createElement('div');
	tag_container.classList.add('tag_container');
	img_container.appendChild(tag_container);
	for (tag in card_contents[single]['tags'])
	{
		all_tags.add(card_contents[single]['tags'][tag]);
		let tag_element = document.createElement("a");
		tag_element.textContent = card_contents[single]['tags'][tag];
		tag_element.classList.add('tag');
		tag_container.appendChild(tag_element);
	}
	
	// Add title
	let title = document.createElement('span');
	title.textContent = card_contents[single]['title'];
	title.classList.add("card-title");
	img_container.appendChild(title);
	
	// Add description to card
	let p_container = document.createElement('div');
	p_container.classList.add('card-content', 'grey-text', 'text-darken-4');
	card.appendChild(p_container);
	
	let para = document.createElement('p');
	para.textContent = card_contents[single]['description'];
	p_container.appendChild(para);
}
	

// Generate tag selection buttons
let tag_selector_container = document.getElementById('all_tags');
let tag_array = Array.from(all_tags);
tag_array.sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
});
for (let tag of tag_array)
{
	let tag_element = document.createElement('a');
	tag_element.textContent = tag;
	tag_element.id = tag;
	tag_element.classList.add('tag', 'waves-effect', 'waves-light');
	tag_element.addEventListener('click', select_tag);
	tag_selector_container.appendChild(tag_element);
}
	

// Show all cards on page load
document.addEventListener('DOMContentLoaded', function()
{
	populate_cards([]);
}, false);


// Put cards on page based on tags selected. Emty list puts all tags on the page
function populate_cards(displayed_tags)
{
	// Delete contents of the container first
	let card_container = document.getElementById("generated_cards");
	while (card_container.firstChild)
	{
		card_container.removeChild(card_container.firstChild);
	}
	
    let first = true;
	let row;
	
	for(c in all_cards)
	{
		let tags_card = card_contents[c]['tags'];
		if (!tags_card.some(t=> displayed_tags.includes(t)) && displayed_tags.length > 0)
			continue;
		// Add row if first element
		if(first)
		{
			row = document.createElement('div');
			row.classList.add("row");
			card_container.appendChild(row);
		}
		first = !first;
		
		row.appendChild(all_cards[c]);
	}
};


//
function select_tag()
{
	let tag = this;
	if (selected_tags.has(tag.id))
	{
		selected_tags.delete(tag.id);
		this.classList.remove('selected');
	}
	else
	{
		selected_tags.add(tag.id);
		this.classList.add('selected');
	}
	
	populate_cards(Array.from(selected_tags));
}


































