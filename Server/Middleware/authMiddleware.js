import jwt from "jsonwebtoken";

export const secure = (req, res, next) => {
    const token = req.headers.authorization?.split(" ") [1];
    if(!token) {
        return res.status(400).json({ message: "Token is not Provided" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid Token"});
    }
};