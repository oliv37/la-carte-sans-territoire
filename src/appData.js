function createData(id, routePath, description) {
    return {
        lazyData: () => import(`./data/${id}.js`),
        routePath,
        description
    };
}

const appData = [
    createData("frDpt", "/french-district", "Carte des départements français"),
    createData("usState", "/us-state", "Carte des états des États-Unis")
];

export default appData;