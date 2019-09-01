function createData(id, routePath, description) {
    return {
        lazyData: () => import(`./data/${id}.js`),
        routePath,
        description
    };
}

const appData = [
    createData("frDpt", "/french-district", "Carte des départements français")
];

export default appData;
