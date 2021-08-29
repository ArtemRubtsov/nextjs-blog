

export default function Handler(req, res) {
    res.status(200).json({text: 'hello'})
    const email = req.body.email
}