// import Hotel from "../models/hotelModel.js";

export const createHotel = async (req, res) => {
    try {
        const { hotelname, location, foodstyle  } = req.body;
        const hotellist = await Hotel.create({
            hotelname, location, foodstyle
        });
        res.status(201).json(hotellist);
    } catch (error) {
        res.status(500).json( {message: error.message});
    }
}

