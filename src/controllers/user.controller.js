
export default {
    async test(req, res) {
        try {
            res.json({ message: "pass" });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

};
