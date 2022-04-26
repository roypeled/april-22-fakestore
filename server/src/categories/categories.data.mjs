let categories = [];

export function getAllCategories() {
    return categories;
}

export function getCategoryById(id) {
    return categories.find(Category => Category.id == id);
}

export function addCategory(Category) {
    const newCategory = {
        ...Category,
        id: getRandomID(),
    };

    categories.push(newCategory);
}

export function removeCategory(id) {
    categories = categories.filter(Category => Category.id != id);
}

export function editCategory(id, Category) {
    const editedCategory = {
        ...Category,
        id,
    };

    categories = categories.map(Category => Category.id == id ? editedCategory : Category);
}