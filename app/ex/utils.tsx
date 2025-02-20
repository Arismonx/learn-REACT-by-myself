export function getImageURL({person}:{
    person:{
        imageId:string
    };
    size?:string
}) {
    return (
        'https://i.imgur.com/' +
        person.imageId + 
        '.jpg'
    );
}