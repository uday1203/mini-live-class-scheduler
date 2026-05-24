const { google } = require("googleapis");

const createGoogleMeet = async (user, classData) => {
  const oauth2Client = new google.auth.OAuth2();

  oauth2Client.setCredentials({
    access_token: user.accessToken,
  });

  const calendar = google.calendar({
    version: "v3",
    auth: oauth2Client,
  });

  const event = {
    summary: classData.title,
    description: classData.description,

    start: {
  dateTime: new Date(classData.startTime).toISOString(),
},

end: {
  dateTime: new Date(classData.endTime).toISOString(),
},

    attendees: classData.students.map((email) => ({
      email,
    })),

    conferenceData: {
      createRequest: {
        requestId: `meet-${Date.now()}`,
        conferenceSolutionKey: {
          type: "hangoutsMeet",
        },
      },
    },
  };

  const response = await calendar.events.insert({
    calendarId: "primary",
    resource: event,
    conferenceDataVersion: 1,
  });

  return response.data;
};

module.exports = createGoogleMeet;