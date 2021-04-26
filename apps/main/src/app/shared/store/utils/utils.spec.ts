import { insertOrUpdateById } from './utils';

interface Entity {
  id: number;
  name: string;
}

describe('Utils', () => {
  describe('insertOrUpdateById', () => {
    it('should insert the object if collection is not defined', () => {
      const result = insertOrUpdateById<Entity>(undefined, {
        id: 1,
        name: '1',
      });
      expect(result).toEqual([{ id: 1, name: '1' }]);
    });

    it('should insert the object if collection is empty', () => {
      const result = insertOrUpdateById<Entity>([], { id: 1, name: '1' });
      expect(result).toEqual([{ id: 1, name: '1' }]);
    });

    it('should add the object if not yet present in the collection', () => {
      const result = insertOrUpdateById<Entity>([{ id: 1, name: '1' }], {
        id: 2,
        name: '2',
      });
      expect(result).toEqual([
        { id: 1, name: '1' },
        { id: 2, name: '2' },
      ]);
    });

    it('should update the object if not yet present in the collection', () => {
      const result = insertOrUpdateById<Entity>(
        [
          { id: 1, name: '1' },
          { id: 2, name: '2' },
        ],
        { id: 2, name: '2 updated' }
      );
      expect(result).toEqual([
        { id: 1, name: '1' },
        { id: 2, name: '2 updated' },
      ]);
    });

    it('should update the object if not yet present in the collection (single element)', () => {
      const result = insertOrUpdateById<Entity>([{ id: 1, name: '1' }], {
        id: 1,
        name: '1 updated',
      });
      expect(result).toEqual([{ id: 1, name: '1 updated' }]);
    });
  });
});
