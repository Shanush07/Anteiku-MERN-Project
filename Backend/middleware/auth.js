import jwt from "jsonwebtoken"

const authmiddleware = async (req, res, next) => {
    const { token } = req.headers;

    if (!token) {
        return res.json({ success: false, message: "Not Authorized. Login Again." });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        req.body = req.body || {};
        req.body.userId = token_decode.id;

        next();
    } catch (error) {
        console.log("JWT Verification Error:", error);
        res.json({ success: false, message: "Invalid Token or Error in Authentication." });
    }
};

export default authmiddleware;
