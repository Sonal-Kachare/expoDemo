export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    applinks: {
      apps: [],
      details: [
        {
          appID: "A5J34NR598.com.clevertap.expoDemo",
          paths: ["/product/*"]
        }
      ]
    }
  });
}
