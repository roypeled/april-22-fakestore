let reviews = [];

export function getAllReviews() {
    return reviews;
}

export function getReviewById(id) {
    return reviews.find(Review => Review.id == id);
}

export function addReview(Review) {
    const newReview = {
        ...Review,
        id: getRandomID(),
    };

    reviews.push(newReview);
}

export function removeReview(id) {
    reviews = reviews.filter(Review => Review.id != id);
}

export function editReview(id, Review) {
    const editedReview = {
        ...Review,
        id,
    };

    reviews = reviews.map(Review => Review.id == id ? editedReview : Review);
}