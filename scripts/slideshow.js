/*
let slides = document.getElementsByClassName("slides");


let slide_index = 1;
show_slides(slide_index);

function change_slide(n)
{
	show_slides(slide_index += n);
}

function show_slides(n)
{
	if (n > slides.length)
		slide_index = 1;
	if (n < 1)
		slide_index = slides.length;
	
	for (let i = 0; i < slides.length; i++)
		slides[i].style.display = "none";
	
	slides[slide_index - 1].style.display = "block";
}
*/
//////////////////////////////////////

let indexes = [];
let slides = [];
let slideshows = document.getElementsByClassName("slideshow_container");

for (let i = 0; i < slideshows.length; i++)
{
	indexes.push(1);
	let children = slideshows[i].children;
/*	for (let j = 1; j < children.length; j++)
	{
		if (children[j].classList.contains("next") || children[j].classList.contains("prev"))
			children.
	}*/
	children = Array.from(children);
	children.pop();
	children.pop();
	slides.push(children);
	show_slides(1, i);
}


function change_slide(slide_n, slideshow)
{
	show_slides(indexes[slideshow] += slide_n , slideshow);
}

function show_slides(slide_n, slideshow)
{
	if (slide_n > slides[slideshow].length)
		indexes[slideshow] = 1;
	if (slide_n < 1)
		indexes[slideshow] = slides[slideshow].length;
	
	for (let i = 0; i < slides[slideshow].length; i++)
		slides[slideshow][i].style.display = "none";
	
	slides[slideshow][indexes[slideshow] - 1].style.display = "block";
}































