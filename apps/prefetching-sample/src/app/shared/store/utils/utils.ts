export function insertOrUpdateById<T extends { id: number }>(collection: T[], obj: T): T[] {
  if (!collection || collection.length === 0) {
    return [obj];
  } else {
    return collection.filter((elem: T) => elem.id !== obj.id).concat(obj);
  }
}
