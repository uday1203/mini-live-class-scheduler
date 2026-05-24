const Class = require("../models/Class");
const createGoogleMeet = require("../services/googleService");

exports.createClass = async (req, res) => {
  try {
    const meetData = await createGoogleMeet(
      global.loggedInUser,
      req.body
    );

    const newClass = await Class.create({
      title: req.body.title,
      description: req.body.description,
      startTime: req.body.startTime,
      endTime: req.body.endTime,
      students: req.body.students,
      meetLink: meetData.hangoutLink,
      eventId: meetData.id,
    });

    res.status(201).json({
      success: true,
      class: newClass,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};