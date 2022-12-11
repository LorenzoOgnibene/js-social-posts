
function getNewEl (element, classes){
    const newEl = document.createElement(element);
    newEl.classList.add(classes);
    return newEl;

}

function getImgEl(img, classes, alternative){
    const newImg = document.createElement('img');
    newImg.setAttribute('src', img);
    newImg.setAttribute('alt', alternative)
    newImg.classList.add(classes);
    return newImg;
}

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const PostsContainer = document.getElementById('container');



posts.forEach(element => {  
    const objNameIcon = element.author.name;
    const postImage = element.media;
    
    //creation div post. Add it in div container
    const postEl = getNewEl('div', 'post');
    PostsContainer.append(postEl);
    //creation div header. Add it in div post
    const postHeader = getNewEl('div', 'post__header');
    postEl.append(postHeader);
    //creation div post meta. Add it in div header
    const postMeta = getNewEl('div', 'post-meta');
    postHeader.append(postMeta);
    //creation div post meta icon. Add it in div post meta
    const postMetaIcon = getNewEl('div', 'post-meta__icon');
    postMeta.append(postMetaIcon);
    //creation element img profile. Add it in div post meta icon
    const profileImageEl = getImgEl(`${element.author.image}`, 'profile-pic', `${objNameIcon.charAt(0)}.${objNameIcon.charAt(objNameIcon.length - 1).toUpperCase()}`);
    postMetaIcon.append(profileImageEl);
    //creation div meta data. Add it in div post meta
    const postMetaData = getNewEl('div', 'post-meta__data');
    postMeta.append(postMetaData);
    //creation div post author name. Add it in post meta data
    const postAuthor = getNewEl('div', 'post-meta__author');
    postAuthor.append(objNameIcon);
    postMetaData.append(postAuthor);
    //creation div date post. Add it in div post meta data
    const creationDate = getNewEl('div', 'post-meta__time');
    creationDate.append(element.created);
    postMetaData.append(creationDate);
    //creation div post text. Add it in div post
    const postText = getNewEl('div', 'post__text');
    postText.append(element.content);
    postEl.append(postText);
    //creation div post content image. Add it in div post
    const postContentImage = getNewEl('div', 'post__image');
    postEl.append(postContentImage);
    //creation element image. Add it to div post image content
    const postImagePrimary = getImgEl(`${element.media}`);
    postContentImage.append(postImagePrimary);
    //creation div post footer. Add it in div post
    const postFooter = getNewEl('div', 'post__footer');
    postEl.append(postFooter);
    //creation div post likes. Add it in post footer
    const postLikes = getNewEl('div', 'likes');
    postLikes.classList.add('js-likes')
    postFooter.append(postLikes);


    //creation div like button
    const likesButton = getNewEl('div', 'likes__cta');
    //creation a for like button
    const button = document.createElement('a');
    button.setAttribute('href', '#');
    button.setAttribute('data-postid', element.id);
    button.classList.add('like-button')
    //creation icon for like button
    const iconButton = getNewEl('i', 'like-button__icon');
    iconButton.classList.add('fas','fa-thumbs-up');
    iconButton.setAttribute('aria-hidden', 'true')
    button.append(iconButton);
    //creation span for text in like button
    const buttonText = getNewEl('span', 'like-button__label');
    buttonText.append(' Mi Piace')
    button.append(buttonText)
    //add button to likes button div
    likesButton.append(button)
    postLikes.append(likesButton);

    //creation div for likes counter
    const likesCounter = getNewEl('div', 'likes__counter');
    postLikes.append(likesCounter);
    //creation likes counter
    const textCounter = getNewEl('b', 'js-likes-counter');
    textCounter.append(element.likes)
    //to fix. I don't know why this is the only way for print that on dom
    likesCounter.append('Piace a ');
    likesCounter.append(textCounter);
    likesCounter.append(' persone')
})