const Subscriber = require('../model/subscribers');

// create a new subscriber using async/await
exports.createSubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.create(req.body);
        res.status(201).json({
            success: true,
            data: subscriber
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Subscriber not created"
        });
    }
}

// get all subscriber using async/await
exports.getAllsubscriber = async (req, res) => {
    try {
        const subscriber = await Subscriber.find();
        res.status(200).json({
            success: true,
            data: subscriber
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Subscriber not found"
        });
    }
}

// get subscriber by name using async/await
exports.getSubscriberByName = async (req, res) => {
    try {
        const subscriber = await Subscriber.findOne({ name: req.params.name });

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: "Subscriber not found"
            });
        }

        res.status(200).json({
            success: true,
            data: subscriber
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

// get subscriber by id using async/await
exports.getSubscriberById = async (req, res) => {
    try {
        const subscriber = await Subscriber.findById(req.params.id);

        if (!subscriber) {
            return res.status(404).json({
                success: false,
                message: "Subscriber not found"
            });
        }

        res.status(200).json({
            success: true,
            data: subscriber
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};
