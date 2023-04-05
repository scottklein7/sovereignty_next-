export interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    author: {
        name: string,
        image: string
    },
    // comments: [Comment],
    description: string,
    mainImage: {
        asset: {
            url: string
        },
    }
    slug: {
        current: string
    },
    body: [object]
}

type weddingImage = {
    _key: string;
    _type: string;
    asset: {
        _ref: string;
        _type: string
    };
    caption: string;
}

export interface weddingImages {
    _id: string,
    images: Array<weddingImage>,
    title: string,
}