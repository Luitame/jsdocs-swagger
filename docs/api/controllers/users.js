module.exports = {
    findAll: (req, res ) => {
        return res.json({
            status: true,
            data: []
        })
    },
    create: (req, res) => {
        return res.json({
            status: true,
            data: {}
        })
    },
    remove: (req, res) => {
        return res.json({
            status: true,
        })
    }
}