import localStorage from '../utils/localStorage';

const mapOldIdNewId = new Map();

export function migrateOldDataIds() {
    mapOldIdNewId.forEach((newId, oldId) => {
        const data = localStorage.getItem(oldId);
        if (data) {
            localStorage.setItem(newId, data);
        }
    });
}
