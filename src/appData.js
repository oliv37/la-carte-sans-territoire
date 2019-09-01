function createData(id, routePath) {
    return {
        routePath,
        lazyData: () => import(`./data/${id}.js`) 
    };
}

const appData = [
    createData("frDpt", "french-district")
];

export default appData;
