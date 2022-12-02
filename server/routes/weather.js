import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/", (req, res) => {
  const { lat, lon } = req.query;
  axios
    .get(
      `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=true`,
      {
        headers: {
          "X-Yandex-API-Key": "7f823399-571e-478a-98b8-268b51534517",
        },
      }
    )
    .then(({ data }) => {
      res.json(data);
    })
    .catch((er) => {
      console.error(er);
      res.status(500).json({
        message: "Ошибка получения информации о местоположении",
      });
    });
});

export default router;
