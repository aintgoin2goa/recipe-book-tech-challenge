
class Collection {
	constructor(entity, items = []){
		this.entity = entity;
		this.type = entity.__name;
		this.items = [];
		items.forEach(i => this.add(i));
	}

	get(index) {
		if (index === undefined) {
			return this.items;
		}

		return this.items[index];
	}

	add(item) {
		if (!item.__name || item.__name !== this.type) {
			throw new TypeError(`Item is not a ${this.entity}`);
		}

		this.items.push(item);
	}
}

export default (entity, items) => new Collection(entity, items);