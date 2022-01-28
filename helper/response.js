module.exports = {
    er: (res, error) => {
        switch (error.message) {
            case 400:
                res.status(400).send();
                break;
            case 401:
                res.status(401).send();
                break;
            case 402:
                res.status(402).send();
                break;
            case 404:
                res.status(404).send();
                break;
            case 408:
                res.status(408).send();
                break;
            default:
                res.status(500).send();
                break;
        }
    },
    sr: (res, data) => res.status(200).json(data),
}
